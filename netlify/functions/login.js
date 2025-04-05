// netlify/functions/login.js
const jwt = require("jsonwebtoken");

exports.handler = async function (event, context) {
    const { email, password } = JSON.parse(event.body);

    // Example user validation (replace with your DB logic)
    const validUser = {
        email: "TUI-Agent1983",
        password: "WDABZTUI1983!$?",
    };

    if (email === validUser.email && password === validUser.password) {
        const token = jwt.sign({ email: validUser.email }, process.env.JWT_SECRET, {
            expiresIn: "24h", // Token will expire in 24 hours
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Login successful", token }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Invalid credentials" }),
        };
    }
};
