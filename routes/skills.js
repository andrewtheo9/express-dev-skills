var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
