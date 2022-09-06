const Pet = require("../models/pet.model");

function createNew(req, res) {
  Pet.create(req.body)
  .then(newPet => res.json({ pet: newPet }))
  .catch((err) =>res.status(400).json({ error: true, message: "Failed to create Author" }));
 }     

function getAll(req, res) {
  Pet.find().sort('name')
        .then(allPets => res.json({ pets: allPets }))
    .catch((err) => res.status(400).json({ message: "something went wrong", error: err }));
}


function deleteById(req, res) {
  Pet.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
}

function find(req, res) {
  Pet.findOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
}

function update(req, res) {
  Pet.updateOne(req.params.id,req.body)
    .then(updatePet =>res.json({ pet:updatePet }))
    .catch((err) => res.status(400).json(err)); 
}

module.exports = {
  createNew,
  getAll,
  deleteById,
  find,
  update,
};
