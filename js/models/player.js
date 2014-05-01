App.Player = DS.Model.extend( {
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async:true}),
  image: DS.attr('string'),
  total_scored: DS.attr('integer'),
  shots: DS.hasMany('shot', {async:true})
});

App.Player.FIXTURES = [
  {
    id: 1,
    name: 'Alonzo Mourning',
    shots: [],
    total_scored: 0,
    image: 'imgs/mourning.png'
  },
  {
    id: 2,
    name: 'Shawn Kemp',
    shots: [],
    total_scored: 0,
    image: 'imgs/kemp.png'
  },
  {
    id: 3,
    name: 'Detlef Schrempf',
    shots: [],
    total_scored: 0,
    image: 'imgs/schrempf.png'
  },
  {
    id: 4,
    name: 'Larry Johnson',
    shots: [],
    total_scored: 0,
    image: 'imgs/ljohnson.png'
  },
  {
    id: 5,
    name: 'Scottie Pippen',
    shots: [],
    total_scored: 0,
    image: 'imgs/pippen.png'
  },
  {
    id: 6,
    name: 'Horace Grant',
    shots: [],
    total_scored: 0,
    image: 'imgs/grant.png'
  },
  {
    id: 7,
    name: 'John Stockton',
    shots: [],
    total_scored: 0,
    image: 'imgs/stockton.png'
  },
  {
    id: 8,
    name: 'Karl Malone',
    shots: [],
    total_scored: 0,
    image: 'imgs/malone.png'
  }
]
