App.Player = DS.Model.extend( {
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async:true}),
  image: DS.attr('string'),
  shotattempts: DS.hasMany('shotattempt', {async:true})
});

App.Player.FIXTURES = [
  {
    id: 1,
    name: 'Alonzo Mourning',
    shotattempts: [1, 2],
    image: 'imgs/1.png'
  },
  {
    id: 2,
    name: 'Shawn Kemp',
    image: 'imgs/2.png'
  },
  {
    id: 3,
    name: 'Detlef Schrempf',
    image: 'imgs/3.png'
  },
  {
    id: 4,
    name: 'Larry Johnson',
    image: 'imgs/4.png'
  }
]
