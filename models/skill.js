const skills = [
  {skill: 'soccer'},
  {skill: 'pingpong'},
  {skill: 'woodwork'},
  {skill: 'cooking'}
];

module.exports = {
  getAll,
  getOne,
  create
};

function getAll() {
  return skills;
}

function create(skill) {
  skills.push(skill);
}

function getOne(id) {
  return skills[id];
}