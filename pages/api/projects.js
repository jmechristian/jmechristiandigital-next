import connectDB from '../../utils/connectDb';
import Project from '../../models/Project';

connectDB();

export default async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};
