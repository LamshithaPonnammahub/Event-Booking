const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
let bookings = [];
let nextId = 1;
app.get("/api/bookings", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All event bookings retrieved successfully",
    data: bookings,
  });
});
app.post("/api/bookings", (req, res) => {
  const { name, email, event,branch,phone } = req.body;

  if (!name || !email || !event||!branch||!phone) {
    return res.status(400).json({ success: false, message: "All fields are required: name, email, event" });
  }

const newBooking = { id: nextId++, name, email, event,branch,phone };
  bookings.push(newBooking);

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    data: newBooking,
  });
});
app.get("/api/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({ success: false, message: "Booking not found" });
  }

  res.status(200).json({
    success: true,
    message: "Booking retrieved successfully",
    data: booking,
  });
});
app.put("/api/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);
  const { name, email, event } = req.body;
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({ success: false, message: "Booking not found" });
  }

  if (name) booking.name = name;
  if (email) booking.email = email;
  if (event) booking.event = event;

  res.status(200).json({
    success: true,
    message: "Booking updated successfully",
    data: booking,
  });
});
app.delete("/api/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);
  const index = bookings.findIndex((b) => b.id === bookingId);

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Booking not found" });
  }

  const deleted = bookings.splice(index, 1);
  res.status(200).json({
    success: true,
    message: "Booking cancelled successfully",
    data: deleted[0],
  });
});
app.listen(PORT, () => {
  console.log(` Synergia Event Booking API running on http://localhost:${PORT}`);
});