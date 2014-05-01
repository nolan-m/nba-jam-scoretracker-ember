App.Shot = DS.Model.extend( {
  scored: DS.attr('integer'),
  player: DS.belongsTo('player', {async:true})
});

App.Shot.FIXTURES = [
  {
    id: 1,
    scored: 1
  },
  {
    id: 2,
    scored: 2
  },
  {
    id: 3,
    scored: 3
  },
  {
    id: 4,
    scored: 0
  }
]
