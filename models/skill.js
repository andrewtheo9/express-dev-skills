const skills = [
    {id: 125223, skill: 'Coded blackjack game', done: true},
    {id: 127904, skill: 'Fantastic with functions', done: false},
    {id: 139608, skill: 'CSS styling expert', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id =parseInt(id);
    return skills.find(skill => skill.id === id);
  }