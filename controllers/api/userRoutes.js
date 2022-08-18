const router = require('express').Router();
const { User, Workout, Category } = require('../../models');

////////////////////////////////////////////////////////
    // TO DO:
        // 'CREATE' route for user sign up
        // 'logged_in' in models?
        // create cookie session data in 'server.js'
////////////////////////////////////////////////////////

// Create route for new user on sign up
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData)
        });
    } catch (err){
        res.status(400).json(err);
    }
})
// Route to get one user by id - for profile page
router.get('/:id', async (req, res) => {
    try {
        userData = await User.findByPk(req.params.id, {
            include: [ { model: Category, through: Workout }]
        });
        res.status(200).json(userData)
    }   catch (err){
        res.status(500).json(err);
    }
});

// Authenticate password and email on user login
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { email: req.body.email } });
        
            if (!userData){
                res.status(400).json({ message: 'Incorrect email or password'})
                return;
            }

            const validPassword = await userData.checkPassword(req.body.password);

            if (!validPassword){
                res.status(400).json({ message: 'Incorrect email or password'});
                return;
            }

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.json({ user: userData, message: 'You`re now logged in'})
            });  
    } catch (err){
        res.status(400).json(err);
    }
});
// Delete a user by its id value. Not sure wether we want to include this option
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!userData){
            res.status(404).json({ message: 'No user matches this id'});
            return
        };

        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err)
    }
})
// Logout router. Clears session wether user is logged in or not.
router.post('/logout', (req, res) => {
    if (req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;