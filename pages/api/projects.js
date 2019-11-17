import projects from '../../public/projects.json';

export default (req, res) => {
  res.status(200).json(projects);
};
