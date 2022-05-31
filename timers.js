function countDown(num){
    console.log(num); // display initial coutdown
    let id = setInterval(function()
    {
        if(--num>0){ //decrement number and if not yet 0 or less, output num
            console.log(num) 
        } else { //say done & clean up interval
            console.log("DONE!");
            clearInterval(id); 
        }
    }, 1000);
}

function randomGame(){
    let count = 0;
    let id = setInterval(function()
    {
        count++;
        if(Math.random()>.75){
            console.log(count);
            clearInterval(id); 
        }
    }, 1000);
}