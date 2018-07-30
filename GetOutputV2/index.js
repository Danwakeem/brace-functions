const rp = require('request-promise');
  
const parseId = (params) => {
  if ('id' in params) return Promise.resolve(params);
  if (!('__ow_headers' in params)) return Promise.reject({ message: 'Missing headers' });
  params.id = params.__ow_headers['x-forwarded-url'].split('/').pop();
  return Promise.resolve(params);
};  

const getOutput = (params) => {
    console.log(params);
    return rp({
        method: 'GET',
        url: `${params.baseUrl}/submissions/${params.id}`,
        json: true
    });
}

const parseOutput = (res) => {
    if (res.status !== '0') return Promise.reject({ error: 'retry' });
    else return Promise.resolve(res);
}

const main = (params) => parseId(params)
    .then(getOutput)
    .then(parseOutput)
    .then(body => ({
        statusCode: 200,
        body,
        headers: { 'Content-Type': 'application/json' }
    }))
    .catch(body => ({
        statusCode: 500,
        body,
        headers: { 'Content-Type': 'application/json' }
    }));