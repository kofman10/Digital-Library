import dbConnect from '../../../utils/db';
import Project from '../../../utils/db'

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return;
      }
      const { title, author, course, file } = req.body;

      await dbConnect()

      const existingUser = await Project.findOne({ title: title });
      if (existingTitle) {
        res.status(422).json({ message: 'title exists already!' });
        return;
      }
    
      const newProject = new Project({
       title,
       author,
       course,
       file
      });
    
      const project = await newProject.save();
    //   await db.disconnect();
      res.status(201).send({
        message: 'Created project!',
        _id: user._id,
        name: user.username,
        isAdmin: user.isAdmin,
      });

}

export default handler