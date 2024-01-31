var timer=60;
var score=0;
var hitAy=0;

function increaseScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function makeNewHit()
{
   hitAy=Math.floor(Math.random()*10);
    document.querySelector("#hitnew").textContent=hitAy;
}


function makeBubble()
    {

        var ayan= "" ;

        for(let i=1 ; i<=160 ; i++)
        {
            var as=Math.floor(Math.random()*10);
            ayan +=  `<div class="bubble">${as}</div>`;
        }
        
        document.querySelector("#pbtn").innerHTML=ayan;
    }

    function runTimer()
    {
      var timeInt=  setInterval(function ()
        {
            if(timer>0){
                
            timer--;
            document.querySelector("#timerval").textContent=timer;
            }

           else
           {
            document.querySelector("#pbtn").innerHTML="<h1>GAME OVER😊</h1>"
            clearInterval(timeInt);
           }
        },1000);
    }

    document.querySelector("#pbtn").addEventListener("click", function(dets)
    {
        var clickedNum=Number(dets.target.textContent);
        if(clickedNum===hitAy)
        {
            increaseScore();
            makeBubble();
            makeNewHit();
        }
    })
    runTimer();
makeBubble();
makeNewHit();




