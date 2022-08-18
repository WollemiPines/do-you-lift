const router = require ('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth')

// Route for when user creates a new workout
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

// Route for when user deletes a workout - get workout by id
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

module.exports = router;