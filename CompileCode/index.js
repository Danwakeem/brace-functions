const rp = require('request-promise');

const compileCode = (params) => {
    const body = {
        sourceCode: params.sourceCode,
        langId: params.langId,
        stdin: params.stdin,
        timeLimit: params.timeLimit,
    };
    
    return rp({
        method: 'POST',
        url: `${params.baseUrl}/submissions`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body,
        json: true,  
    })
}

const main = (params) => compileCode(params)
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
