import Project from '../../models/Project';

export default async (req, res) => {
  const { _id } = req.query;
  const project = await Project.findOne({ _id });
  res.status(200).json(project);
};
