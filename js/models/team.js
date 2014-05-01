App.Team = DS.Model.extend( {
  name: DS.attr('string'),
  players: DS.hasMany('player', {async:true}),
  image: DS.attr('string')
});

App.Team.FIXTURES = [
  {
    id: 1,
    name: 'Charlotte Hornets',
    players: [1, 4],
    image: 'imgs/hornets.png'
  },
  {
    id: 2,
    name: 'Seattle SuperSonics',
    players: [2, 3],
    image: 'imgs/sonics.png'
  },
    {
    id: 3,
    name: 'Chicago Bulls',
    players: [5, 6],
    image: 'imgs/bulls.png'
  },
    {
    id: 4,
    name: 'Utah Jazz',
    players: [7, 8],
    image: 'imgs/jazz.png'
  }
]
