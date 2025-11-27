const Todo = require("../models/todo.model");

// CREATE TODO
exports.createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;

    const todo = await Todo.create({
      userId: req.user._id,
      title,
      description,
      dueDate,
      priority,
    });

    res.status(201).json({
      message: "Todo created successfully",
      success: true,
      todo,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET ALL TODOS OF USER
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: todos.length,
      todos,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET SINGLE TODO BY ID
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!todo) {
      return res
        .status(404)
        .json({ message: "Todo not found", success: false });
    }

    res.json({ success: true, todo });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// UPDATE TODO
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      console.log(req.body),
      { new: true }
    );

    if (!todo) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized", success: false });
    }

    res.json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE TODO
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!todo) {
      return res
        .status(404)
        .json({ message: "Todo not found", success: false });
    }

    res.json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
