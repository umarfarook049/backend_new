const AppointmentModel = require('../models/appointmentModel');

// Add a new appointment
exports.addAppointment = (req, res) => {
  const appointmentData = req.body;

  AppointmentModel.addAppointment(appointmentData, (err, result) => {
    if (err) {
      console.error('Error adding appointment:', err);
      return res.status(500).json({ error: 'Failed to add appointment' });
    }
    res.status(201).json({ message: 'Appointment added successfully', id: result.insertId });
  });
};

// Get all appointments
// exports.getAppointments = (req, res) => {
//   AppointmentModel.getAppointments((err, results) => {
//     if (err) {
//       console.error('Error fetching appointments:', err);
//       return res.status(500).json({ error: 'Failed to fetch appointments' });
//     }
//     res.status(200).json(results);
//   });
// };

exports.getAppointments = (req, res) => {
    AppointmentModel.getAppointments((err, results) => {
      if (err) {
        console.error('Error fetching appointments:', err);
        return res.status(500).json({ error: 'Failed to fetch appointments' });
      }
      res.status(200).json(results);
    });
  };
  