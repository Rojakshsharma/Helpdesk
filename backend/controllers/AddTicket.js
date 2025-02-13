import ticketModel from "../Schema/ticketModel.js";
const addTicket = async (req, res) => {
  try {
    const { title, query, date, status, firstname, lastname , email } = req.body;
    const ticketData = {
      firstname,
      lastname,
      title,
      query,
      date,
      status,
      email
    };

    const newTicket = new ticketModel(ticketData);
    await newTicket.save();

    res.json({ success: true, message: "Ticket is created" });
  } catch (error) {
    console.log("error in creating ticket", error);
    res.json({ success: false, message: error.message });
  }
};

export default addTicket;
