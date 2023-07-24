import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, },
    author: { type: String, required: true },
    course: { type: String, required: true },
    year: {type : String, required: true },
    supervisor: {type : String, required: true },
    abstract : {type : String, required: true },
    keywords : {type : String, required: true },
    filename: { type: String, required: true },
    emailOfSupervisor: { type: String },
    phoneNumberOfSupervisor: { type: String }
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;