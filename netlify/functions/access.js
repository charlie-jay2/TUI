// netlify/functions/access.js
exports.handler = async function (event, context) {
    const { code } = JSON.parse(event.body);

    // Define a valid access code
    const validAccessCode = "1234567890"; // Replace with your actual access code

    if (code === validAccessCode) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Invalid access code" }),
    };
};
