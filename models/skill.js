const skills = [
    {id: 125223, skill: 'Coded blackjack game', done: true},
    {id: 127904, skill: 'Fantastic with functions', done: false},
    {id: 139608, skill: 'CSS styling expert', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id =parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the skill object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }