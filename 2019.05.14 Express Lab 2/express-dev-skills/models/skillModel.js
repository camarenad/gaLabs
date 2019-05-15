var skills = [
    {id: 0, skill: 'HTML', done: true},
    {id: 1, skill: 'CSS', done: true},
    {id: 2, skill: 'JavaScript', done: true},
    {id: 3, skill: 'jQuery', done: true},
    {id: 4, skill: 'Node JS', done: false},
    {id: 5, skill: 'Express.js', done: false},
    {id: 6, skill: 'MongoDB', done: false},
    {id: 7, skill: 'Python', done: false},
    {id: 8, skill: 'Django', done: false},
    {id: 9, skill: 'SQL', done: false},
    {id: 10, skill: 'Auth', done: false},
    {id: 11, skill: 'Heroku', done: false},
    {id: 12, skill: 'AJAX', done: false},
    {id: 13, skill: 'ReactJS', done: false},
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