const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// 使用 body-parser 解析 JSON 请求体
app.use(bodyParser.json());

// 创建 SQLite 数据库连接
const db = new sqlite3.Database('./users.db');

// 创建用户表
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            email TEXT
        )
    `);
});

// 注册接口
app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    // 检查用户名是否已存在
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: '数据库错误' });
        }
        if (row) {
            return res.status(400).json({ error: '用户名已存在' });
        }

        // 对密码进行哈希处理
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({ error: '密码加密失败' });
            }

            // 将用户信息插入数据库
            db.run(
                'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
                [username, hash, email],
                (err) => {
                    if (err) {
                        return res.status(500).json({ error: '注册失败' });
                    }
                    res.status(201).json({ message: '注册成功' });
                }
            );
        });
    });
});

// 登录接口
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 查找用户
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: '数据库错误' });
        }
        if (!row) {
            return res.status(400).json({ error: '用户名或密码错误' });
        }

        // 验证密码
        bcrypt.compare(password, row.password, (err, result) => {
            if (err || !result) {
                return res.status(400).json({ error: '用户名或密码错误' });
            }
            res.status(200).json({ message: '登录成功' });
        });
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器正在运行，访问地址：http://localhost:${port}`);
});