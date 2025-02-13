import ticketModel from "../Schema/ticketModel.js";
const updateTicket = async (req, res) => {
  try {
    const { email , status, } = req.body;
    const updateTicket = await ticketModel.findOneAndUpdate(
      { email: email }, 
      { $set: { status: status , date: Date.now()} }, 
      { new: true }
    );
    
    res.json({ success: true, message: "Ticket is updated" });
  } catch (error) {
    console.log("error in updating ticket", error);
    res.json({ success: false, message: error.message });
  }
};

export default updateTicket;
