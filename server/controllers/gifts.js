const Gift = require('../models/Gift');

const getAll = (req, res) => {
  Gift.find({ isDeleted: false })
    .then((gifts) => res.status(200).json(gifts))
    .catch((err) => res.status(404).json(err));
};

const createGift = (req, res) => {
  const newGift = new Gift(req.body);
  newGift
    .save()
    .then((gift) => res.status(200).json(gift))
    .catch((err) => res.status(404).json(err));
};

const deleteGift = (req, res) => {
  Gift.findByIdAndUpdate(req.params.id, { isDeleted: true })
    .then((gift) => res.status(200).json(gift))
    .catch((err) => res.status(404).json(err));
};

const deleteAllGifts = (req, res) => {
  Gift.updateMany({}, { isDeleted: true })
    .then((gifts) => res.status(200).json(gifts))
    .catch((err) => res.status(404).json(err));
};

module.exports = {
  getAll,
  createGift,
  deleteGift,
  deleteAllGifts,
};
