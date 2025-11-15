const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

const supabaseUrl = 'https://ndaihkkqwvvjbnlbygek.supabase.co';
const supabaseKey = 'sb_secret_jDwAuhb_d1n2qFblVoRcVg_Amu7s5-M';

// 注册接口
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const response = await fetch(`${supabaseUrl}/rest/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
        },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: data.message });
    }
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});