var min=0,sec=0,mill=0, t;
var sp=" : ";
var c1,c2,c3;


function func2(){
 clearInterval(t);
}

function func3(){
t = setInterval(function() { func5() } , 10);
document.getElementById('st').disabled = true;
}

function func5()
{
    mill++;
    if(mill >= 99)
    {
        mill = 0;
        sec++;
        if(sec >= 59)
         {
            sec = 0;
            min++;
         }
    }

var x = document.body;

c1 = Math.floor(Math.random() * 256);
c2 = Math.floor(Math.random() * 256);
c3 = Math.floor(Math.random() * 256);
// c1 = "f" + Math.trunc(Math.random()*9) ;
// c2 = "f" + Math.trunc(Math.random()*9) ;
// c3 = "f" + Math.trunc(Math.random()*9) ;

x.style.backgroundColor = "rgb(" + c1 + "," + c2 + "," + c3 + ")";

  document.getElementById('a').innerHTML = min + sp + sec + sp + mill;
}

function func4()
{
    document.getElementById('st').disabled = false;
    min = "00";
    sec = "00";
    mill = "00";
   document.getElementById('a').innerHTML = min + sp + sec + sp + mill;
}

