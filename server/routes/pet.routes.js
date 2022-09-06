const  PetController = require("../controllers/pet.controller")
function registerPetRoutes(app)
{
    //create one
    app.post("/api/new", PetController.createNew);

    //all authers
    app.get("/api/all", PetController.getAll);

    //find one by id
    app.get("/api/:_id", PetController.find);

    //delete one
    app.delete("/api/deletebyId/:_id", PetController.deleteById);

    //update one
    app.put("/api/edit/:_id", PetController.update);
}

module.exports = registerPetRoutes