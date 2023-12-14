import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions);
        console.log("Conecting to database...");
    } catch (error) {
        throw error;
    } finally {
        console.log("Successfully connected to database!");
    }
}

export default dbConnection;
