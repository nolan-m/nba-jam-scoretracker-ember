App.Player = DS.Model.extend( {
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async:true}),
  image: DS.attr('string'),
  total_scored: DS.attr('integer')
  shots: DS.hasMany('shot', {async:true})
});

App.Player.FIXTURES = [
  {
    id: 1,
    name: 'Alonzo Mourning',
    shots: [],
    total_scored: 0,
    image: 'imgs/1.png'
  },
  {
    id: 2,
    name: 'Shawn Kemp',
    shots: [],
    image: 'imgs/2.png'
  },
  {
    id: 3,
    name: 'Detlef Schrempf',
    shots: [1],
    image: 'imgs/3.png'
  },
  {
    id: 4,
    name: 'Larry Johnson',
    shots: [],
    image: 'imgs/4.png'
  }
]
