const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user._id });
  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body, { new: true }
  );
  if (!task) return res.status(404).send('Not found');
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  res.json({ message: 'Task deleted' });
};
