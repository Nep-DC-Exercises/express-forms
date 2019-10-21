const express = require('express');
const router = express.Router();
const indexModel = require('../models/indexModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const skillsWithRanks = await indexModel.joinSkillsWithRanks();
  const topicNames = await indexModel.getTopicNames();
  const skillLevels = await indexModel.getSkillLevels();
  console.log(skillsWithRanks);
  console.log(topicNames);
  console.log(skillLevels);

  res.render('template', { 
    locals: {
      title: "Welcome!",
      skillsWithRanks: skillsWithRanks,
      skillLevels: skillLevels,
      topicNames: topicNames
    },
    partials: {
      partial: "index.partial"
    }
   });
});

module.exports = router;