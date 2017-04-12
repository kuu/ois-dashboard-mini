const express = require('express');
const debug = require('debug');
const api = require('../models/api');

const router = express.Router();
// const {pcode, playerBrandingId, version} = config.player;
const print = debug('ois-mini');

router.get('/', (req, res) => {
  const externalId = req.params.id;
  const fileName = req.params.file_name;
  const status = req.params.status;
  const period = req.params.period;
  print(`/ called. externalId=${externalId}, fileName=${fileName}, status=${status}, period=${period}`);

  api.getLogs(externalId, fileName, status, period).then(({results}) => {
    print(`${results.lengs} logs obtained`);
    res.render('index.html', {results});
  }).catch(err => {
    res.render('error.html', {err});
  });
});

module.exports = router;
