setInterval(function(){currentSec()}, 1000);

function currentSec()
{
    let d = new Date(); 
    let time = d.toLocaleTimeString(); 
    console.log(d.toLocaleTimeString()); 
}