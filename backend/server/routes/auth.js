
const express = require("express");
const axios = require("axios");
const db = require('./db.js');
const jwt = require('jsonwebtoken');

const userDetail = {
}
const userInfo = {
    user:{
    }
}
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Send request to external API for token verification
        const authResponse = await axios.post("https://amanatit.ir/api/auth/gettoken", {
                password: password
            }, {
                headers: {
                    amanatclient: username
                }
            })
        // Check if the response contains success: true
        if (authResponse.data.success) {
            // Verify user in your own database
            // const dbResult = await db.query(`select * from verify_user_password ('${username}', '${password}');`);
            // if (dbResult.rows[0].verify_user_password) {
                const timeExpired = await axios.get(`https://amanatit.ir/api/user/daysExpiration/${username}`)
                // const userDetails = await db.query(`select * from user_get_data ('${username}');`);
                // const user = authResponse.data.companyName;
                if(timeExpired.data){
                    userInfo.user.timeExpired = timeExpired.data.data;
                }
                // // Set user info

                // Generate a JWT token
                const accessToken = jwt.sign({ userId: username }, 'your-secret-key', { expiresIn: '50h' });
                
                // Add accessToken to the response
                userDetail.accessToken = accessToken;
                // userDetail.companyName = authResponse.data.companyName
                userInfo.user.displayName = authResponse.data.companyName;
                userInfo.user.phoneNumber = username;

                // Send user data with access token to the front end
                res.status(200).json(userDetail);
            // } else {
            //     res.status(401).json({ error: "Invalid username or password" });
            // }
        } else {
            // External authentication failed
            res.status(401).json({ error: "Authentication failed with external service" });
        }
    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});


router.get("/userinfo",
    (req, res) => {
                res.send(userInfo)
    });

module.exports = router;
