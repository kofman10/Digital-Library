import dbConnect from "../../utils/db";
import Project from "../../models/Project";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();


try {
  
    if (method === "GET") {
      try {
        const projects = await Project.find({ course: /test/ });
        res.status(200).json(projects);
        console.log(projects)
      } catch (error) {
        res.status(500).json(error);
      }
    }
    // res.status(201).send({
    //   message: "Created project!",
    //   _id: project._id,
    //   title: project.title,
    //   author: project.author,
    //   course: project.course,
    //   //  filename: project.filename,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default handler;
