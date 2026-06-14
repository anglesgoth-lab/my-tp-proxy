const express = require('express');
const app = express();
app.use(express.json());

app.post('/go', (req, res) => {
    res.json({ 
        ok: true, 
        place: 127420050046984   // CHANGE THIS to your target game Place ID
    });
});

app.listen(process.env.PORT || 3000, () => console.log("Proxy ready"));
