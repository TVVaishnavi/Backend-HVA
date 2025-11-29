const express = require('express');
require('dotenv').config();
const connectDb = require('./config/dbConfig');
const signupRoute = require('./route/signup');
const loginRoute = require('./route/login');
const createAdminAccount = require('./admin');
const taskRoute = require('./route/task');
const seedTask = require('./service/taskSeed');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/user', signupRoute);
app.use('/', loginRoute, taskRoute);

connectDb().then(async()=>{
    await seedTask();
    await createAdminAccount();
    console.log("Admin and task seeding completed");
    app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
    })
});


