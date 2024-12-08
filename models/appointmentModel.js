const db = require('../config/db');

// Add a new appointment
exports.addAppointment = (appointmentData, callback) => {
  const query = `
    INSERT INTO appointments (patientName, appointmentNo, appointmentDate, phone, gender, doctor, priority, fee)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    appointmentData.patientName,
    appointmentData.appointmentNo,
    appointmentData.appointmentDate,
    appointmentData.phone,
    appointmentData.gender,
    appointmentData.doctor,
    appointmentData.priority,
    appointmentData.fee,
  ];

  db.query(query, values, callback);
};

// Get all appointments
exports.getAppointments = (callback) => {
  const query = 'SELECT * FROM appointments';
  db.query(query, callback);
};
