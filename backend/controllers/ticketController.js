const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc   Get user tickets
// @route  GET /api/tickets
// @access Privte
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "getTickets" });
});

// @desc   Create new ticket
// @route  POST /api/tickets
// @access Privte
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "getTickets" });
});

module.exports = {
  getTickets,
  createTicket,
};
