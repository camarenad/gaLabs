var skills = [
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'JavaScript', done: true},
    {skill: 'jQuery', done: true},
    {skill: 'Node JS', done: false},
    {skill: 'Express.js', done: false},
    {skill: 'MongoDB', done: false},
    {skill: 'Python', done: false},
    {skill: 'Django', done: false},
    {skill: 'SQL', done: false},
    {skill: 'Auth', done: false},
    {skill: 'Heroku', done: false},
    {skill: 'AJAX', done: false},
    {skill: 'ReactJS', done: false},
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};
  
function update(id, skill) {
    skills.splice(id, 1, skill);
}
  
function deleteOne(id) {
    skills.splice(id, 1);
}
  
function create(skill) {
    skills.push(skill);
}
  
function getOne(id) {
    return skills[id];
}
  
function getAll() {
    return skills;
}