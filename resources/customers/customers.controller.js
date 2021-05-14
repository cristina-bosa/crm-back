const customersModel = require("./customers.model");
module.exports = {
    getAll,
    getById,
    createOne,
    deleteOne,
    editOne,
};

function getAll(req, res) {
    return customersModel
        .find()
        .then((customers) => {
            return res.status(200).send(customers);
        })
        .catch((error) => {
            return res.status(404).send("La base de datos esta vacía");
        });
}

function getById(req, res) {
    return customersModel
        .findById(req.params._id)
        .then((customer) => {
            return res.status(200).send(customer);
        })
        .catch((error) => {
            return res.status(404).send("El usuario no se encuentra");
        });
}

function createOne(req, res) {
    return customerModel
        .create(req.body)
        .then((customer) => {
            return res.status(200).send("Se ha creado correctamente");
        })
        .catch((error) => res.status(400).send("Error al crear el usuario"));
}

function deleteOne(req, res) {
    const id = +req.params.id;
    return customerModel
        .findOne({ id: id })
        .remove()
        .then((customer) => {
            return res.status(200).send("Se ha eliminado correctamente");
        })
        .catch((e) => console.log(e));
}

function editOne(req, res) {
    const id = +req.params.id;
    return customerModel
        .updateOne({ id: id }, { $set: req.body }, { runValidators: true })
        .then((response) => {
            return res.status(200).send("Se ha actualizado correctamente");
        })
        .catch((e) => console.log(e));
}
