//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

var player = [
    new Player(),
    new Player()
 ]
 
 
 var pad = [
     player[0].pad = new Box(),
     player[1].pad = new Box()
 ]




//pad[0] setup

pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2
pad[0].color = `Red`

//p2 setup

pad[1].w = 20
pad[1].h = 150
pad[1].x = 780 + pad[1].w/2
pad[1].color = `Blue`



//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `Black`

var p2Score = 0
var p1Score = 0

var div = Array.from(document.querySelectorAll(`section div`))
//console.log(div)



function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //pad[0] movement 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
  
    //pad[1] movement
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
        {
            pad[1].vy += pad[1].force
        }

    for(i=0;i<pad.length;i++)
    {
        pad[i].vy *= fy
        pad[i].move()
    }
    //ball movement
    ball.move()


    //Pad collisions
    for(i=0;i<pad.length;i++)
    {
        if(pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if(pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        } 
    }
    
    //ball collision with leftside
    if(ball.x < 0)
    {
        p2Score += 1
        console.log(`${p1Score} | ${p2Score}`)
        ball.x = c.width/2
        ball.y  =c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }


    //Ball colide with rightside
    if(ball.x > 799)
    {
        p1Score += 1
        console.log(`${p1Score} | ${p2Score}`)
        ball.x = c.width/2
        ball.y  =c.height/2
    }
    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y > 799)
    {
        ball.y = 800
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }
        

    //pad[0] with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //ball collides with pad[1]
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    for(i=0;i<pad.length;i++)
    {
        pad[i].draw()
    }
    ball.draw()

    
    for(let i = 0; i < div.length; i++)
    {
        div[0].innerHTML = `Player 1 Score: ` + p1Score
        div[1].innerHTML = `Player 2 Score: ` + p2Score
    }
    

}


