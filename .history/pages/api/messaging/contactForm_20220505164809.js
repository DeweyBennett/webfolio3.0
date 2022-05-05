import dbConnect from '../../../utils/mongodb';
import CFMessage from '../../../Modelsmodels/Message'
import UnregUser from "../../../Models/UnregUser";

const handler = async (req, res) => {
  console.log("Message request received", req.method)
  console.log(req.body)
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const Messages = await CFMessage.find({});
      console.log(Messages)
      return res.status(200).json( Messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    const data = req.body
    const { firstName, lastName, email, message, role } = JSON.parse(data);

    const user = await UnregUser.findOne({ email: email })
    console.log("Returning User Message", user)

    if (!user) {
      try {
        const newUser = await UnregUser.create({ firstName , lastName, email, role });
        const newMessage = await CFMessage.create({ firstName , lastName, email, message});

        console.log("New unregistered user", newUser)
        console.log("Message Posted", newMessage);

        return res.status(201).json({ message: "Successful" });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const newMessage = await CFMessage.create(req.body);

      console.log("Message Posted",newMessage);
      
      res.status(201).json(newMessage);
    } catch (err) {
      
      res.status(500).json(err);
    }
  }
};

export default handler;
