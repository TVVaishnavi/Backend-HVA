const Task = require('../model/task');
const User = require('../model/user');
const taskData = require('../taskSeed.json');

const seedTasks = async() =>{
    try {
        for (const task of taskData){
            const user = await User.findOne({email: task.userEmail});
            if(!user){
                console.log(`User with email ${task.userEmail} not found. Skipping task "${task.title}".`);
                continue;
            }

            await Task.updateOne(
                { title: task.title, userEmail: user.email }, 
                { $setOnInsert: { description: task.description, userEmail: user.email } }, 
                { upsert: true } 
            )
            console.log(`Seeded task "${task.title}" for user ${user.email}, userId: ${user._id}`);
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = seedTasks;