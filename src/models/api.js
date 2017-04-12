const api = require('../lib/ooyala');
const utils = require('../lib/utils');

module.exports = {
  getLogs(externalId, fileName, status='done', period='last_1month') {
    return api.get('/v2/ingestion/logs', utils.createPureObj({period}));
  },
  getAsset(embedCode) {
    return api.get(`/v2/assets/${embedCode}`);
  },
  getTokenRequest(...params) {
    return api.getTokenRequest(...params);
  }
};
