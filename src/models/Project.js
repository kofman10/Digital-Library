import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, },
    author: { type: String, required: true },
    course: { type: String, required: true },
    file: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;