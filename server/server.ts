import * as mongoose from 'mongoose';
import * as express from 'express';
import * as Player from './api/players/model'
const MONGO_URL = 'mongodb://localhost/team-manager';
import {config} from '../config';
let app = express();

mongoose.connect(MONGO_URL, function(err){
  if(err) console.log(err);
  else console.log(`Connected to ${MONGO_URL}`);
})
app.get(/\/client.{0,}\/.+\.jade/, (req, res, next) => {
  res.render(config.root + req.path);
})
//access /bower_components via /scripts/...
app.use('/bower_components', express.static('bower_components'));
//access tghe ckuebt->app->home folder via /app/home
app.use('/client', express.static('client'))

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use(require('body-parser')());

let teams: ITeam[] = [
  {id: 1,
  teamName: 'Warriors',
  teamLocation: 'Oakland',
  teamMascot: 'Dub',
  },
  {id: 2,
  teamName: 'Lakers',
  teamLocation: 'Los Angeles',
  teamMascot: 'Winners',
  },
  {id: 3,
  teamName: 'Clippers',
  teamLocation: 'Los Angeles',
  teamMascot: 'Losers',
  },
  {id: 4,
  teamName: 'Spurs',
  teamLocation: 'San Antonio',
  teamMascot: 'Spur',
  },
  {id: 5,
  teamName: 'Raptors',
  teamLocation: 'Toronto',
  teamMascot: 'Raptor',
  },
];

app.get('/api/v1/teams', (req, res, next) => {
  res.json(teams);
});
app.get('/api/v1/teams/:id', (req, res, next) => {
  let team = teams.filter((item) => item.id == req.params['id'])[0]
  if(team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/api/v1/teams/:id', (req, res, next) => {
  teams = teams.filter((item) => item.id != req.params['id']);
  res.end();
});

app.use('/api/v1/players', require('./api/players/routes'))

app.get(/\/(client|scripts|api).{0,}/, (req, res, next) => {
res.sendStatus(404);
});

app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Server is listening');
})
