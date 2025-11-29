const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    userEmail: { 
        type: String, 
        ref: 'User', 
        required: true 
    }
}, { timestamps: true });

taskSchema.index({ title: 1, userEmail: 1 }, { unique: true });

module.exports = mongoose.model('Task', taskSchema);
