let stopWatch =document.getElementsByClassName("stopWatch")[0]
let miliSecond = document.getElementsByClassName("mili")[0]

let start = document.getElementsByClassName("start")[0];
let pause = document.getElementsByClassName("pause")[0];
let continues = document.getElementsByClassName("continue")[0];
let restart = document.getElementsByClassName("restart")[0];

let seconds=0,minutes=0,hours=0,mili=0
let interval;

const startTime = () =>{
    mili+=10
    console.log(typeof(mili))
    if(mili == 1000){
        mili=0
        seconds++
    }else if(seconds==60){
        seconds=0
        minutes++
    }else if(minutes == 60){
        minutes=0
        hours++
    }
    let miliS = mili<100 ? "00"+mili.toString() : mili;
    //mili = mili<100 ? "00"+mili.toString() : mili;
    let hr = hours<10 ? "0"+hours.toString() : hours;
    let min = minutes<10 ? "0"+minutes.toString() : minutes;
    let sec = seconds<10 ? "0"+seconds.toString() : seconds;
    stopWatch.textContent=hr+":"+min+":"+sec
    miliSecond.textContent=mili 
}

const getStart = () =>{
    clearInterval(interval)
    interval=setInterval(startTime,10)
}
const stop = () =>{
    clearInterval(interval)
}
const keepGoing = () =>{
    clearInterval(interval)
    interval=setInterval(startTime,10)
}
const again = () =>{
    clearInterval(interval)
    seconds=0,minutes=0,hours=0,mili=0
    let miliS  = mili<100 ? "00"+mili.toString() : mili;
    let hr = hours<10 ? "0"+hours.toString() : hours;
    let min = minutes<10 ? "0"+minutes.toString() : minutes;
    let sec = seconds<10 ? "0"+seconds.toString() : seconds;
    stopWatch.textContent=hr+":"+min+":"+sec
    miliSecond.textContent=miliS 
}

start.addEventListener('click',getStart)
pause.addEventListener('click',stop)
continues.addEventListener('click',keepGoing)
restart.addEventListener('click',again)