<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Weather Animation</title>
<style>
    canvas {
        border: 1px solid black;
    }
</style>
</head>
<body>
<canvas id="canvas" width="400" height="200"></canvas>

<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // 定义不同天气类型的函数
    function drawSun() {
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }

    function drawCloud() {
        ctx.beginPath();
        ctx.arc(100, 100, 40, 0, Math.PI * 2);
        ctx.arc(150, 100, 50, 0, Math.PI * 2);
        ctx.arc(200, 100, 40, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    function drawRain() {
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 10);
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }

    // 清除画布
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // 动画函数
    function drawWeatherAnimation(weatherType) {
        clearCanvas();

        switch (weatherType) {
            case 'sun':
                drawSun();
                break;
            case 'cloud':
                drawCloud();
                break;
            case 'rain':
                drawRain();
                break;
            default:
                console.error('Unknown weather type');
                break;
        }
    }

    // 示例：播放不同天气类型的动画
    setTimeout(() => drawWeatherAnimation('sun'), 1000);
    setTimeout(() => drawWeatherAnimation('cloud'), 3000);
    setTimeout(() => drawWeatherAnimation('rain'), 5000);
</script>
</body>
</html>
