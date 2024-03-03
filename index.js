<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Snowflake Effect</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
        background-color: #000;
    }

    canvas {
        display: block;
    }
</style>
</head>
<body>
<canvas id="snowCanvas"></canvas>

<script>
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 雪花数组
    let snowflakes = [];

    // 创建雪花对象
    function createSnowflake() {
        const x = Math.random() * canvas.width;
        const y = 0;
        const radius = Math.random() * 3 + 1;
        const speed = Math.random() * 2 + 1;

        return { x, y, radius, speed };
    }

    // 绘制雪花
    function drawSnowflake(snowflake) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF';
        ctx.fill();
    }

    // 更新雪花位置
    function updateSnowflake(snowflake) {
        snowflake.y += snowflake.speed;
        snowflake.x += Math.sin(snowflake.y / 30) * 2; // 使雪花在y轴方向轻微摆动

        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas.width;
        }
    }

    // 渲染雪花
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach(snowflake => {
            drawSnowflake(snowflake);
            updateSnowflake(snowflake);
        });

        requestAnimationFrame(render);
    }

    // 创建多个雪花
    for (let i = 0; i < 100; i++) {
        snowflakes.push(createSnowflake());
    }

    // 开始渲染
    render();
</script>
</body>
</html>
