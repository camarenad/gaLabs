var Skill = require('../models/skillModel');

module.exports = {
    index,
    show,
    redirectHome,
    home,
    skills,
    edit,
    update,
    new: newSkill,
    create,
    delete: deleteSkill,
    about,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1,
        time: req.time
    });
}

function redirectHome(req, res) {
    res.redirect('home')
}

function home(req, res) {
    res.render('home');
}

function skills(req, res) {
    res.render('skills');
}

function edit(req, res) {
    // var skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect('/skills/${req.params.id)');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function about(req, res) {
    res.render('about');
}