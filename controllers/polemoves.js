const Polemove = require("../models/polemoves");
const ObjectId = require("mongoose").Types.ObjectId;
const User = require("../models/users");
const Media = require("../models/media");

const bunnies = require("../util/bunny");
const moment = require("moment");

exports.create = async (req, res, next) => {
  try {
    console.log(req.body);
    const name = req.body.name;
    let otherNames = req.body.otherNames;
    const level = req.body.level;
    const mainPhoto = req.file;
    const description = req.body.description;
    let extension = null;

    if (mainPhoto) {
      extension = mainPhoto.mimetype.split("/").pop();
    }

    if (otherNames !== "undefined") {
      if (otherNames.includes(",")) {
        otherNames = otherNames.split(",");
      } else {
        otherNames[0] = otherNames;
      }
    } else {
      otherNames = [];
    }

    const newMove = new Polemove({
      name: name,
      otherNames: otherNames,
      level: level,
      description: description === "undefined" ? "" : description,
      extension: extension,
    });

    const createdMove = await newMove.save();

    //Bunny photo upload
    if (extension) {
      const bunnyData = {
        fsFileName: mainPhoto.filename,
        bunnyFileName: `${createdMove._id}.${extension}`,
        path: `mainphotos`,
      };

      await bunnies.upload(bunnyData);
    }

    const { __v, createdAt, updatedAt, ...responseMove } = newMove.toObject();
    res
      .status(201)
      .json({ message: "Polemove created", newMove: responseMove });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.viewAll = async (req, res, next) => {
  try {
    //get all moves
    const polemoves = await Polemove.find({}).select(
      "name level description otherNames extension"
    );

    res
      .status(200)
      .json({ message: "Moves fetched succesfully", polemoves: polemoves });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
