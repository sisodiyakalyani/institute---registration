const User = require('../models/user');
const Board = require('../models/board');
const Medium = require('../models/medium');
const Standard = require('../models/standard');
const Subject = require('../models/subject');

exports.registerSchoolUser = async (req, res) => {
  try {
    const { name, boardId, mediumId, classCategoryId, standardId, subjectIds } = req.body;

    const user = new User({
      name,
      instituteType: "School",
      board: boardId,
      medium: mediumId,
      classCategory: classCategoryId,
      standard: standardId,
      subjects: subjectIds
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSubjectsByStandard = async (req, res) => {
  try {
    const subjects = await Subject.find({ standard: req.params.standardId });
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
