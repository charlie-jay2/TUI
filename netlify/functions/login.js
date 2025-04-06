const jwt = require("jsonwebtoken");

exports.handler = async function (event) {
    const { email, password } = JSON.parse(event.body);

    const validUser = {
        email: "TUI-Agent1983",
        password: "WDABZTUI1983!$?",
    };

    if (email === validUser.email && password === validUser.password) {
        const token = jwt.sign(
            { email: validUser.email },
            process.env.JWT_SECRET || "default_secret", // fallback if missing
            { expiresIn: "24h" }
        );

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
