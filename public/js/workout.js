

router.get('/', async (req, res) => {
    try {
        workoutData = await Workout.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name']
                }
            ]
        });

        const workouts = workoutData.map((category) => category.get({ plain: true }));

        res.render('workouts', {
            workouts,
            // logged_in: req.params.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})