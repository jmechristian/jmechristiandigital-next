import mongoose from 'mongoose';

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) {
    console.log('Using Existing Connection');
    return;
  }
  // use new db connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('DB Connected');
  connection.isConnected = db.connections[0].readyState;
};

export default connectDB;
