const PersonData = require("../models/personshema");

class CurdOperation {
  constructor() {}
  postData = async (req, res) => {
    try {
      const personInnfo = new PersonData(req.body);
      console.log(req.body);
      const personInfo = await personInnfo.save();
      res.status(201).send(personInfo);
    } catch (error) {
      res.status(400);
    }
  };

  getData = async (req, res) => {
    try {
      const personInnfo = await PersonData.find();
      res.status(202).send(personInnfo);
    } catch (error) {
      res.status(400);
    }
  };
  getByIdData = async (req, res) => {
    try {
      const _id = req.params.id;
      const personInnfo = await PersonData.findById(_id);
      res.status(202).send(personInnfo);
    } catch (error) {
      res.status(400);
    }
  };

  patchData = async (req, res) => {
    try {
      const _id = req.params.id;
      const personInnfo = await PersonData.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.status(302).send(personInnfo);
    } catch (error) {
      res.status(400);
    }
  };
  deleteData = async (req, res) => {
    try {
      const personInnfo = await PersonData.findByIdAndDelete(req.params.id);
      res.status(202).send(personInnfo);
    } catch (error) {
      res.status(400);
    }
  };
}

module.exports = new CurdOperation();
