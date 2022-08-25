const router = require ('express').Router();
const { Workout, Category } = require('../../models');
const withAuth = require('../../utils/auth')


////////////////////////////////////////////////////////
    // ROUTES NEEDED:
    // (a) create new workout
    // (b) get one workout
    // (c) get all workouts
    // (d) delete workout
////////////////////////////////////////////////////////

// (a) create new workout
router.post('/', withAuth, async (req, res) => {
    try {
        const newWorkout = await Workout.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newWorkout);
    } catch (err){
        res.status(400).json(err);
    }
});


// increase reps WIP //

// router.put('/', withAuth, async (req, res) => {
//     console.log('req.body = ',req.body)
//     try {
//       const [affectedRows] = await Workout.update(req.body, {
//         where: {
//           id: req.params.id,
//         },
//       });
  
//       if (affectedRows > 0) {
//         res.status(200).end();
//       } else {
//         res.status(404).end();
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


// (b) get one workout
router.get('/:id', async (req, res) => {
    try {
        workoutData = await Workout.findByPk(req.params.id, {
            include: [
                { 
                    model: Category, 
                    attributes: ['name']
                }
            ]
        });
        res.status(200).json(userData)
    } catch (err){
        res.status(500).json(err);
    }
})
// (c) get all workouts
router.get('/', async (req, res) => {
    try {
        workoutData = await Workout.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name'],
                    attributes: ['reps']
                }
            ]
        });

        const workouts = workoutData.map((category) => category.get({ plain: true }));

        res.render('workouts', {
            workouts,
             logged_in: req.params.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})


// (d) delete workout
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if(!workoutData){
            res.status(404).json({ message: 'There is no workout with this id'});
            return;
        }

        res.status(200).json(workoutData)
    } catch (err){
        res.status(500).json(err)
    }
});

// Add Workout to users workouts database
router.put('/', async (req, res) => {
    try {
        const { id, name, reps } = req.body;
        const bmi = fitnessCalculator.BMI(Number(height), Number(weight));
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

module.exports = router;