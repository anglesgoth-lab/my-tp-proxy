const express = require('express');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.post('/go', (req, res) => {
    console.log("Teleport request received from Roblox!");
    res.json({ 
        ok: true, 
        place: 127420050046984   // ← CHANGE THIS to your real target Place ID
    });
});

app.get('/go', (req, res) => {
    res.send("Proxy is working! Use POST from Roblox.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy is live on port ${PORT}`);
});
