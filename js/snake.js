
function Snake(){
    const canvas = document.getElementById('game');
 let context = canvas.getContext('2d');
 let grid = 10;
 var score = 0;
 //khoi tao doi tuong ran la 1 o vuong
 let snake = {
     x: 160,
     y: 160,

     dx: grid, // huong di chuyen theo phương x hoặc y,
     // ở đây khi game started thì snake sẽ di chuyển theo phương ngang 
     // (x direction với value = 10)
     dy: 0,
     cells: [],
     maxCells: 4
 }
 let count = 0;
 let mouse = { // khoi tao con chuot
     x: 320,
     y: 320
 }

 function getRandomInt(min, max) { // ham random
     return Math.floor(Math.random() * (max - min)) + min;
 }

 //game loop
 function loop() {
     //hàm này hiểu giống như là setTimeout, sẽ gọi lại hàm
     /* loop sau khi thực thi xong*/

     //requestAnimationFrame là 1 phương thức của trình duyệt, để xử lý chuyển động sao cho mượt mà nhất có thể (60fps)
     requestAnimationFrame(loop);

     if (++count < 4) {
         return;
     }

     count = 0;
     context.clearRect(0, 0, canvas.width, canvas.height);

     snake.x = snake.x + snake.dx;// moi lan loop chay thi snake se di chuyen 1 don vi
     snake.y = snake.y + snake.dy;

     //khi snake dung tuong thi phair lam sao
     if (snake.x<0){
         snake.x = canvas.width - grid
     }
     else if (snake.x >= canvas.width){
        snake.x = 0
     }
    else if (snake.y<0){
        snake.y = canvas.width - grid
    }
    else if (snake.y >= canvas.width){
       snake.y = 0
    }


     //su dung phuong thuc unshift se them 1 phan tu vao dau mang
     snake.cells.unshift({ x: snake.x, y: snake.y });

     // them 1 o vuong o phia truoc thi phai remove 1 cai o phia sau
     if (snake.cells.length > snake.maxCells) {
         snake.cells.pop();
     }
     //draw mouse
     context.fillStyle = "red"
     context.fillRect(mouse.x,mouse.y,grid -1, grid -1)
     //draw snake
     context.fillStyle = 'green';
     snake.cells.forEach(function (cell, index) {
         //index: hieu la vi tri phan tu phan tu trong mang
         //cell: hieu la phan tu dang xet trong mang
         context.fillRect(cell.x, cell.y, grid - 1, grid - 1);


         //snake eat mouse
         if (cell.x === mouse.x && cell.y === mouse.y){
             snake.maxCells++;

             mouse.x = getRandomInt(0,25)*grid;
             mouse.y = getRandomInt(0,25)*grid;

            score++
            document.getElementById("score").innerText = "Your Score : " + score
         }
         //snake eats its tail
         for (i=index+1;i<snake.cells.length;i++){
             //va cham thi reset game
             if(cell.x === snake.cells[i].x && cell.y === snake.cells[i].y){
                 if (score> model.currentUser.displayName){
                    model.currentUser.displayName = score
                    firebase.auth().currentUser.updateProfile ({

                        displayName: score,
                    });
                    document.getElementById("highestscore").innerHTML = "Your highest score : " + model.currentUser.displayName
                 }
                
                snake.x = 160,
                snake.y = 160,

                snake.dx = grid
                snake.dy = 0
                snake.cells= []
                snake.maxCells = 4
                score = 0
                document.getElementById("score").innerText = "Your Score : " + score
                document.getElementById("highestscore").innerHTML = "Your highest score : " + model.currentUser.displayName
             }
         }
         //
     })
 }
 document.addEventListener('keydown',function(event){
    if (event.which === 37 && snake.dx==0){
        snake.dx = -grid
        snake.dy = 0
    }
    else if (event.which === 38 && snake.dy ===0){
        snake.dy = -grid
        snake.dx = 0
    }
    else if (event.which === 39 && snake.dx ===0){
        snake.dx = grid
        snake.dy = 0
    }
    else if (event.which === 40 && snake.dy ===0){
        snake.dy = grid
        snake.dx = 0
    }
})
 requestAnimationFrame(loop);
}