const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/escolar';

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000 // Ajuste personalizado
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit(-1);
    }
}

module.exports = connectDB;