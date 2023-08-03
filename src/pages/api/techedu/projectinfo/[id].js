import dbConnect from "../../../../utils/db";
import Project from "../../../../models/Project";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  try {
    if (method === "DELETE") {
      const project = await Project.findByIdAndDelete(req.query.id);
      res.status(200).json(project);
    }
    if (method === "POST") {
      const { emailOfSupervisor, phoneNumberOfSupervisor } = req.body;
      const updatedFields = { emailOfSupervisor, phoneNumberOfSupervisor };
      const updatedUser = await Project.findByIdAndUpdate(
        req.query.id,
        { $set: updatedFields }, 
        { new: true }
      );
      res.status(200).json(updatedUser)
    }
    if (method === "GET") {
        const projectUp = await Project.find({ _id: req.query.id });
        res.status(200).json(projectUp);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default handler;
