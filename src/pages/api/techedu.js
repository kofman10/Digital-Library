import dbConnect from "../../utils/db";
import Project from "../../models/Project";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  try {
    if (method === "POST") {
      const project = await Project.create(req.body);
      // console.log(project);
      res.status(200).json(project);
    }

    if (method === "GET") {
      try {
      
        const projects = await Project.find({
          course: { $regex: /technology\s*education/i } }
        );
        res.status(200).json(projects);
      } catch (error) {
        res.status(500).json(error);
      }
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default handler;
