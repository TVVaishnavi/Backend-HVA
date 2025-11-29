const Task = require('../model/task');
const seedTasks = require('../service/taskSeed'); 

const getAllTasks = async (req, res) => {
    try {
        const taskCount = await Task.countDocuments();
        if (taskCount === 0) {
            console.log("No tasks found. Seeding tasks...");
            await seedTasks(); 
        }
        let tasks;
        if (req.user.role === 'admin') {
            tasks = await Task.find();
        } else {
            tasks = await Task.find({ userEmail: req.user.email });

        }

        res.json(tasks);
    } catch (error) {
        console.log("Error in getAllTasks:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = getAllTasks;
