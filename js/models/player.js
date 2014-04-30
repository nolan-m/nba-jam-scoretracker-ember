App.Player = DS.Model.extend( {
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async:true})
});

App.Player.FIXTURES = [
  {
    id: 1,
    name: 'Muggsy Bogues'
  },
  {
    id: 2,
    name: 'Shawn Kemp'
  },
  {
    id: 3,
    name: 'Gary Payton'
  },
  {
    id: 4,
    name: 'Larry Johnson'
  }
]
