import fetch from 'node-fetch';

exports.handler = async () => {
    let statusCode, data;

    // try {
    //     const response = await fetch('https://chickenfacts.io/api/v1/facts.json');
    //     data = await response.json();
    //     statusCode = 200;
    // } catch (err) {
    //     statusCode = err.statusCode || 500;
    //     data = { error: err.message };
    // }

    statusCode = 200;
    data = { 'i': 'am data' }

    return {
        statusCode,
        body: JSON.stringify(data)
    }
};