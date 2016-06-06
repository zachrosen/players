export let players: IPlayer[] =[];
export function reset() {
    players.length = 0;
}
export function remove(id: number) {
  players = players.filter((item) => item.id !== id);
}
export function seed() {
players.push(
  {id: 1,
  firstName: 'Stephen',
  lastName: 'Curry',
  age: 27,
  sport: 'Basketball',
  position: 'PG',
  height: 73,
  weight: 190,
  number: 30,
  image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
  teamName: 'Warriors',
  college: 'Davidson',
  nationality: 'USA'
  },

  {id: 2,
  firstName: 'Lebron',
  lastName: 'James',
  age: 30,
  sport: 'Basketball',
  position: 'SF',
  height: 77,
  weight: 250,
  number: 23,
  image: 'http://l1.yimg.com/bt/api/res/1.2/a3msGgStarpOr9C2Gaygnw--/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/lebron-james-basketball-headshot-photo.jpg',
  teamName: 'Cavaliers',
  college: 'N/A',
  nationality: 'USA'
  },

  {id: 3,
  firstName: 'Kobe',
  lastName: 'Bryant',
  age: 37,
  sport: 'Basketball',
  position: 'SF',
  height: 76,
  weight: 220,
  number: 24,
  image: 'http://az616578.vo.msecnd.net/files/2016/05/02/635977562108560005-679443365_kobe.jpg',
  teamName: 'Lakers',
  college: 'N/A',
  nationality: 'USA'
  },

  {id: 4,
  firstName: 'Kevin',
  lastName: 'Durant',
  age: 27,
  sport: 'Basketball',
  position: 'SF',
  height: 80,
  weight: 210,
  number: 35,
  image: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/kevin_durant.png',
  teamName: 'Thunder',
  college: 'N/A',
  nationality: 'USA'
  },

  {id: 5,
  firstName: 'Benjamin',
  lastName: 'Stelzer',
  age: 20,
  sport: 'Couch Potato',
  position: 'Catcher',
  height: 72,
  weight: 150,
  number: 69,
  image: 'IMG_2706.png',
  teamName: 'Losers',
  college: 'UC Berkeley',
  nationality: 'England'
  },

  {id: 6,
  firstName: 'Steven',
  lastName: 'Fogel',
  age: 18,
  sport: 'Croquet',
  position: 'Pitcher',
  height: 74,
  weight: 180,
  number: 96,
  image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11703156_1148719105143317_2696716066388014785_n.jpg?oh=6ae06654b3a505de25545b0277e39796&oe=57C88ACE',
  teamName: 'Fogel Capital',
  college: 'UC Berkeley',
  nationality: 'USA'
  }
);
}
