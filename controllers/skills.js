var Skill = require('../models/skill');


module.exports = {
  index,
  new: newSkill,
  show,
  create
}

function index(req, res, next) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}


function newSkill(req, res) {
  res.render('skills/new');                              
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1
  });
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/skills');
}