exports.handler = async () => {
    let statusCode, data;

    try {
        const response = await fetch('https://doodapi.com/api/file/list?key=219725bbkborbourrp2cd4');
        data = await response.json();
        statusCode = 200;
    } catch (err) {
        statusCode = err.statusCode || 500;
        data = { error: err.message };
    }

    return {
        statusCode,
        body: JSON.stringify(data)
    }
};