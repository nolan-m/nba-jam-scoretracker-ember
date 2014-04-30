App.Team = DS.Model.extend( {
  name: DS.attr('string'),
  players: DS.hasMany('player', {async:true})
});

App.Team.FIXTURES = [
  {
    id: 1,
    name: 'Charlotte Hornets',
    players: [1, 4]
  },
  {
    id: 2,
    name: 'Seattle SuperSonics',
    players: [2, 3]
  }
]
