// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://maheshbhairi8766:8766@ac-ngghuih-shard-00-00.mozpxhc.mongodb.net:27017,ac-ngghuih-shard-00-01.mozpxhc.mongodb.net:27017,ac-ngghuih-shard-00-02.mozpxhc.mongodb.net:27017/nitcplacement?ssl=true&replicaSet=atlas-ygdw6f-shard-0&authSource=admin&retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

const getJobData = async () => {
    const fetch_data = await mongoose.connection.db.collection('jobslists');
    const data = await fetch_data.find({}).toArray();
    return data;
};

const getAppliedJobData = async () => {
    const fetch_data = await mongoose.connection.db.collection('appliedstudents');
    const data = await fetch_data.find({}).toArray();
    return data;
};

module.exports = {
    connectDB,
    getJobData,
    getAppliedJobData,
};
