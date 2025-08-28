const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./src/routes/user');

dotenv.config();

const app = express();  
const PORT = process.env.PORT || 5000;
// console.log(process.env.JWT_SECRET);


app.use(express.json());
app.use(cors());
app.use('/api', userRouter);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});