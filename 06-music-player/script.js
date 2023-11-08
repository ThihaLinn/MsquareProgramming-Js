const container = document.getElementsByClassName("container")[0]
const track = document.getElementsByClassName("track")[0]
const audio = document.getElementsByTagName("audio")[0]
const duration = document.getElementsByClassName("time")[0]
const playButtonTag = document.getElementsByClassName("playButton")[0]
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0]
const progress = document.getElementsByClassName("progress")[0]
const periousButton = document.getElementsByClassName("periousButton")[0]
const nextButton = document.getElementsByClassName("nextButton")[0]

let playTrack = 0
let play = false

const music = [
    { trackId: "./music/Aww May Yal.mkv", title: "Aww May Yal - Draco" },
    { trackId: "./music/back  to home .mkv", title: "Ain Pyan chain - DoubleJ" },
    { trackId: "./music/A phye kan.mkv", title: "Aphyekan - Hlawn Paing" },
    { trackId: "./music/Yapartal-Wink.mkv", title: "Yapartal - Wink" }
]

for (let i = 0; i < music.length; i++) {
    let element = document.createElement("div")
    element.textContent = (i + 1).toString() + ". " + music[i].title
    track.append(element)

    element.addEventListener("click", () => {
        const trackId = music[i].trackId
        audio.src = trackId
        audio.play();
        play=true
        playTrack=i
        checkPlayOrStop()
        console.log("working")
    })

}
let totalDuration;
let miliDuration;
audio.addEventListener("loadeddata", () => {
    miliDuration = Math.floor(audio.duration)
    totalDuration = displayTime(miliDuration)
})


audio.addEventListener("timeupdate", () => {
    const updatedTime = Math.floor(audio.currentTime)
    let currentTime = displayTime(updatedTime)
    duration.textContent = currentTime + " / " + totalDuration
    progress.style.width = (400/miliDuration*updatedTime)+"px"

})

let displayTime = (duration) => {
    const min = Math.floor(duration / 60)
    const sec = Math.floor(duration % 60)

    let realMin = min < 10 ? "0" + min.toString() : min;
    let realSec = sec < 10 ? "0" + sec.toString() : sec;

    const totalTime = realMin + ":" + realSec
    return totalTime;
}

playButtonTag.addEventListener("click", () => {
    if (audio.src=="") {
        let trackId = music[playTrack].trackId
        console.log(trackId)
        audio.src = trackId
        console.log(audio.src)
        audio.play()
        play = true
        checkPlayOrStop()
    } else {
        play=true
        audio.play()
        checkPlayOrStop()
    }
    
})

pauseButtonTag.addEventListener("click",()=>{
    audio.pause();
    play=false
    checkPlayOrStop();
})

periousButton.addEventListener("click",() => {
    if (playTrack == 0) {
        playTrack=0
        
    }else{
        playTrack--
    }
    audio.src = music[playTrack].trackId
    audio.play()
})
nextButton.addEventListener("click", () => {
    if (playTrack == music.length-1) {
        playTrack = music.length-1

    } else {
        playTrack++
    }
    audio.src = music[playTrack].trackId
    audio.play()
})

let checkPlayOrStop = () => {
    if (play) {
        playButtonTag.style.display="none"
        pauseButtonTag.style.display="inline"
    }else{
        playButtonTag.style.display = "inline"
        pauseButtonTag.style.display = "none"
    }   

}







