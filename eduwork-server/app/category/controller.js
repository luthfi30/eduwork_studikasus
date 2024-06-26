const Categories = require("./model");
const store = async (req, res, next) => {
  try {
    let payload = req.body;
    let category = new Categories(payload);
    await category.save();
    return res.json(category);
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let payload = req.body;
    let { id } = req.params;
    let category = await Categories.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    return res.json(category);
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let { id } = req.params;
    let category = await Categories.findByIdAndDelete(id);
    return res.json(category);
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let categories = await Categories.find();
    return res.json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = { store, index, update, destroy };
