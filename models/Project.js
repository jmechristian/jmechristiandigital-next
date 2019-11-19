import mongoose from 'mongoose';

const { String, Number, Array } = mongoose.Schema.Types;

const ProjectSchema = new mongoose.Schema({
  ProjectID: {
    type: String
  },
  projectTitle: {
    type: String
  },
  projectColor: {
    type: String
  },
  problem: {
    type: String
  },
  solution: {
    type: String
  },
  featureImage: {
    type: String
  },
  callout: {
    type: String
  },
  designImage: {
    type: [String]
  },
  colors: {
    type: String
  },
  delivery: {
    type: String
  },
  mobileImage: {
    type: [String]
  },
  finalImage: {
    type: String
  }
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
