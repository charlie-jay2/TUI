// netlify/functions/validateSession.js
const jwt = require("jsonwebtoken");

exports.handler = async function (event, context) {
    const token = event.headers.authorization?.split(" ")[1];

    if (!token) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" }),
        };
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Session valid", user: decoded }),
        };
    } catch (err) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Session expired" }),
        };
    }
};
