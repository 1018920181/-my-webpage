<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>仓库管理系统</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #007bff;
            text-align: center;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.1em;
            line-height: 1.6;
            color: #333;
        }
        .btn-primary {
            display: block;
            width: 200px;
            margin: 30px auto;
            padding: 10px;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>仓库管理系统</h1>
        <p>
            欢迎使用仓库管理系统！这是一个专为电子配件和整机管理设计的在线平台。通过本系统，您可以轻松管理仓库中的各种配件和整机，包括添加、编辑、删除和查询操作。系统支持实时更新库存数量，并提供直观的界面和强大的功能，帮助您高效管理仓库资源。
        </p>
        <p>
            主要功能包括：
        </p>
        <ul>
            <li>电子配件管理：添加、编辑、删除配件，并实时更新库存数量。</li>
            <li>整机管理：管理整机信息，并与配件关联。</li>
            <li>出库入库管理：记录配件的出库和入库操作。</li>
            <li>用户权限管理：支持不同用户角色和权限设置。</li>
        </ul>
        <p>
            点击下方按钮登录系统，开始您的仓库管理之旅！
        </p>
        <button class="btn btn-primary" onclick="window.location.href='index.html'">登录</button>
    </div>
</body>
</html>
