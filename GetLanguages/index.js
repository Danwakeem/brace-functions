const rp = require('request-promise');
  
const getLanguages = (params) => rp({
    method: 'GET',
    url: `${params.baseUrl}/languages`,
    json: true,
});
  
const main = (params) => getLanguages(params)
    .then(languages => ({
        statusCode: 200,
        body: { languages },
        headers: { 'Content-Type': 'application/json' }
    }))
    .catch(body => ({
        statusCode: 500,
        body,
        headers: { 'Content-Type': 'application/json' }
    }));
