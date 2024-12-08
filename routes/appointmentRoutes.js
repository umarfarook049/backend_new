const express = require('express');
const appointmentController = require('../controllers/appointmentController');

const router = express.Router();

// Route to add a new appointment
router.post('/', appointmentController.addAppointment);

// Route to get all appointments
router.get('/', appointmentController.getAppointments);

router.get('/', appointmentController.getAppointments);


module.exports = router;
