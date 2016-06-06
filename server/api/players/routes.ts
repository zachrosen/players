import * as express from 'express';
import * as controller from './controller'
let router = express.Router();
// base URL----/api/v1/players

// GET: /api/v1/players/
router.get('/', controller.getAll);
// GET: /api/v1/players/:id
// :id -> unique player ID
router.get('/:id', controller.getOne);
//Delete: /api/v1/players/:id
//id -> unique player ID
router.delete('/:id', controller.remove);
//POST -> /api/v1/players
router.post('/', controller.create);

router.post('/:id', controller.update);

export = router;
