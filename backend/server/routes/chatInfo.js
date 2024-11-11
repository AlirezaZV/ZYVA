
const express = require("express");
const axios = require("axios");
const db = require('./db.js');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get("/conversations", 
    async(req, res) => {
        try {
            const result = await db.query(`select * from get_user_conversation_first_messages (1);`);
            res.send(result.rows)
        } catch(error){
            res.status(401).json({ error: error.message })
        }
    });

router.post("/search", async (req, res) => {
    try {

    const { searchString } = req.body;
    const result = await db.query(`SELECT * FROM get_conversations_with_search_string(1, '${searchString}');`);
    res.status(200).json( result.rows );

    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});

router.post("/messagelist", async (req, res) => {
    try {
    const { conversationKey } = req.body;
    const result = await db.query(`SELECT * FROM get_conversation_messages('${conversationKey}');`);
    res.status(200).json( result.rows );

    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});

router.post("/addmessage", async (req, res) => {

    try {
    await db.query(`SELECT insert_message_for_user('${messageBody}');`);
    res.status(200);

    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; // Exporting the WebSocket server instance
