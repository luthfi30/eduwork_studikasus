const { subject } = require("@casl/ability");
const DeliveryAddress = require("./model");
const policyFor = require("../../utils");

const store = async (req, res, next) => {
  try {
    let payload = req.body;
    let user = req.user;
    let address = new DeliveryAddress({ ...payload, user: user._id });
    await address.save();
    return res.json(address);
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
    let { _id, ...payload } = req.body;
    let { id } = req.params;

    let address = await DeliveryAddress.findById(id);
    let subjectAdress = subject("DeliveryAddress", { ...address, user_id: address.user });
    let policy = policyFor(req.user);
    if (!policy.can("update", subjectAdress)) {
      return res.json({
        error: 1,
        message: "You are not allowed to update this address",
      });
    }
    address = await DeliveryAddress.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
    res.json(address);
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
    let address = await DeliveryAddress.findById(id);
    let subjectAdress = subject("DeliveryAddress", { ...address, user_id: address.user });
    let policy = policyFor(req.user);
    if (!policy.can("delete", subjectAdress)) {
      return res.json({
        error: 1,
        message: "You are not allowed to delete this address",
      });
    }

    address = await DeliveryAddress.findByIdAndDelete({ id, user: user._id });
    res.json(address);
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let { skip = 0, limit = 10 } = req.query;
    let count = await DeliveryAddress.find({ user: req.user._id }).countDocuments();
    let address = await DeliveryAddress.find({ user: req.user._id }).skip(parseInt(skip)).limit(parseInt(limit)).sort({ createdAt: -1 });
    return res.json({ data: address, count });
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
module.exports = { store, update, destroy, index };
