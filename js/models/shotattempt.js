App.Shotattempt = DS.Model.extend( {
  scored: DS.attr('string'),
  player: DS.belongsTo('player', {async:true})
});

App.Shotattempt.FIXTURES = [
  {
    id: 1,
    scored: 'y'
  },
  {
    id: 2,
    scored: 'n'
  }
]
