import dbConnect from "../../../utils/db";
import Project from "../../../models/Project";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  try {
    if (method === "DELETE") {
      const project = await Project.findByIdAndDelete(req.query.id);
      res.status(200).json(project);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default handler;