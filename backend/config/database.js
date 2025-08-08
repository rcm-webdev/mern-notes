const mongoose = require("mongoose");
const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING);
        logger.info({ host: mongoose.connection.host }, `MongoDB connected`);
    } catch (error) {
        logger.error({ err: error }, 'MongoDB connection error');
    }
}

module.exports = connectDB;