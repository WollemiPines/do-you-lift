const router = require('express').Router();
const { User, Workout, Category } = require('../../models');
const fitnessCalculator = require("fitness-calculator");

////////////////////////////////////////////////////////
// ROUTES NEEDED:
// (a) create user on sign-up
// (b) get one user
// (c) validate inputted email and password with associated user in database
// (d) delete user
// (e) session clear on logout
////////////////////////////////////////////////////////

// (a) create user on sign-up
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData)
        });
    } catch (err) {
        res.status(400).json(err);
    };
});

// Update User profile
router.put('/', async (req, res) => {
    try {
        const { bodyType, goal, weight, age, height } = req.body;
        const bmi = fitnessCalculator.BMI(Number(height), Number(weight)); //function will only accept Number type data
        const user = await User.findByPk(req.session.user_id);
        const userData = await user.update(
            {
                height: height,
                weight: weight,
                bodyType: bodyType,
                age: age,
                bmi: bmi,
                goal: goal
            });
        res.status(200).json(userData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
});

// (b) get one user
router.get('/:id', async (req, res) => {
    try {
        userData = await User.findByPk(req.params.id, {
            include: [{ model: Category, through: Workout }]
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    };
});

// (c) validate inputted email and password with associated user in database
router.post('/login', async (req, res) => {
    try {
        // validate email
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password' })
            return;
        };

        // validate password
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;
        };

        // save session data
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You`re now logged in' })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// (d) delete user
//  using session id prevents other unrelated users from deleting others
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.session.user_id
            }
        });
        if (!userData) {
            res.status(404).json({ message: 'No user matches this id' });
            return
        };

        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err)
    }
})
// (e) session clear on logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;