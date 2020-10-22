const mongoose = require('mongoose');
const Cars = require('./routes/Cars/models/Car');
const carSeed = require('./carSeed.json');
require('dotenv').config();

const seedFunc = async () => {
    try {
        const data = await Cars.create(carSeed);
        console.log(`${data.length} records created`);

        await mongoose.disconnect();
        console.log('MongoDB Disconnected');

        process.exit(0);
    }
    catch(error) {
        console.log(error);
        process.exit(1);
    }
};

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('MongoDB Connected');
        mongoose.connection.db.dropDatabase();
    })
    .then(() => {
        seedFunc();
    })
    .catch((err) => console.log(`MongoDB Error: ${err}`));