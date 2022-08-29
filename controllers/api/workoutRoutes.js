const router = require('express').Router();
const { UserWorkouts } = require('../../models');

////////////////////////////////////////////////////////
// Future Work: ROUTES NEEDED:
// (a) create new workout
// (d) delete workout
////////////////////////////////////////////////////////


// Add Workout to user's workouts database
// If workout exists, update number of reps
router.post('/asign', async (req, res) => {
    try {
        const { workout_id, reps } = req.body;
        await UserWorkouts.create({
            user_id: req.session.user_id,
            workout_id: workout_id,
            reps: reps
        });
        res.status(201).json()
    } catch (err) {
        try {
            // updating workout ID
            const { workout_id, reps } = req.body;
            const userWorkoutID = await UserWorkouts.findOne({
                where: {
                    user_id: req.session.user_id,
                    workout_id: workout_id,
                }
            })
            await userWorkoutID.update({ reps: reps })
            res.status(201).json()
        } catch (err) {
            res.status(500).json(err)
        }
    };
});

module.exports = router;