const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Change this to a secure secret key

exports.handler = async (event) => {
    const { username, password } = JSON.parse(event.body);

    // In a real application, you'd validate the username and password against a database
    if (username === 'admin' && password === 'admin_password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        return {
            statusCode: 200,
            body: JSON.stringify({ token }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: 'Invalid username or password.' }),
        };
    }
};
