const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const workoutRoutes = require('./api/workoutRoutes');

router.use('/user', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;