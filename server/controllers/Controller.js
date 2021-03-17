const { EasyQ, MediumQ, HardQ, Contribution } = require("../../database");

exports.postEasyQuestion = async (req, res) => {
  console.log("POST Easy Q", req.body);
  try {
    const question = new EasyQ(req.body);
    await question.save();
    res.send({ data: question });
  } catch (err) {
    console.log("Failed to post easy question", err);
    res.status(400).send(err);
  }
};
exports.postMediumQuestion = async (req, res) => {
  console.log("POST Medium Q", req.body);
  try {
    const question = new MediumQ(req.body);
    await question.save();
    res.send({ data: question });
  } catch (err) {
    console.log("Failed to post medium question", err);
    res.status(400).send(err);
  }
};
exports.postHardQuestion = async (req, res) => {
  console.log("POST Hard Q", req.body);
  try {
    const question = new HardQ(req.body);
    await question.save();
    res.send({ data: question });
  } catch (err) {
    console.log("Failed to post hard question", err);
    res.status(400).send(err);
  }
};

exports.getEasyQuestion = async (req, res) => {
  try {
    const question = await EasyQ.aggregate([{ $sample: { size: 1 } }]);
    res.send(question);
  } catch (err) {
    console.log("Failed to get Question", err);
    res.status(400).send(err);
  }
};
exports.getMediumQuestion = async (req, res) => {
  try {
    //Experimental request that gets all the category strings. only want 1 tho.
    // const question = await MediumQ.find({ Category: { $eq: "Strings" } })
    const question = await MediumQ.aggregate([{ $sample: { size: 1 } }]);
    res.send(question);
  } catch (err) {
    console.log("Failed to get Question", err);
    res.status(400).send(err);
  }
};
exports.getHardQuestion = async (req, res) => {
  try {
    const question = await HardQ.aggregate([{ $sample: { size: 1 } }]);
    res.send(question);
  } catch (err) {
    console.log("Failed to get Question", err);
    res.status(400).send(err);
  }
};

exports.patchEasyQuestion = async (req, res) => {
  try {
    const question = await EasyQ.findById(req.params.id);
    Object.assign(question, req.body);
    question.save();
    res.send(question);
  } catch (err) {
    console.log("Failed to patch question", err);
    res.status(404).send(err);
  }
};

exports.patchMediumQuestion = async (req, res) => {
  try {
    const question = await MediumQ.findById(req.params.id);
    Object.assign(question, req.body);
    question.save();
    res.send(question);
  } catch (err) {
    console.log("Failed to patch question", err);
    res.status(404).send(err);
  }
};

// exports.patchScorre = async (req, res) => {
//   try {
//     // const question = await EasyQ.findById(req.params.id);
//     // Object.assign(question, req.body);
//     // question.save();
//     // res.send(question);
//   } catch (err) {
//     // console.log("Failed to patch question", err);
//     // res.status(404).send(err);
//   }
// };

//CONTRIBUTIONS

exports.postContribution = async (req, res) => {
  console.log("POST contributiion", req.body);
  try {
    const contribution = new Contribution(req.body);
    await contribution.save();
    res.send(contribution);
  } catch (err) {
    console.log("Failed to contribution", err);
    res.status(400).send(err);
  }
};

exports.getContribution = async (req, res) => {
  try {
    const contribution = await Contribution.aggregate([
      { $sample: { size: 1 } },
    ]);
    res.send(contribution);
  } catch (err) {
    console.log("Failed to get contribution", err);
    res.status(400).send(err);
  }
};
