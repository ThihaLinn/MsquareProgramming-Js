let container = document.getElementsByClassName("container")[0]
let dropdownTags = document.getElementsByClassName("dropdown-item")

 console.log(dropdownTags)
let videos = [
    { title: "Episode-localStortge(part 1)", link:"./images/thumbnail_82.png",date:new Date(2021,2,13),view:2344},
    { title: "Episode-localStortge(part 2)", link: "./images/thumbnail_83.png", date: new Date(2021,1, 24), view: 2234 },
    { title: "Episode-json(part-1)", link: "./images/thumbnail_84.png", date: new Date(2021,4,), view: 1256 },
    { title: "Episode-json(part-2)", link: "./images/thumbnail_85.png", date: new Date(2020,12,3), view: 5567 }
]




for (let i = 0; i < dropdownTags.length; i++) {
    dropdownTags[i].addEventListener("click",()=>{
        let selectedSort =  dropdownTags[i].id
        console.log( typeof selectedSort)
        if (selectedSort==1) {
            videos.sort((a,b) => (a.date-b.date))
            sorting(videos)

        } else if (selectedSort == 2){
            videos.sort((a, b) => (b.date - a.date))
            sorting(videos)
        }else{
            videos.sort((a, b) => (b.view - a.view))
            sorting(videos)
            console.log("videos")
        }

    })
}



let sorting = (videos)=>{
    container.innerHTML=""
    for (let i = 0; i < videos.length; i++) {
        let video = `
      <div>
            <img src="${videos[i].link}" class="m-3">
            <h5 class="">${videos[i].title}</h5>
            <div class="viewsAndDate fw-light">
                <span >${videos[i].date.toLocaleDateString()}</span>
                <span >${videos[i].view} views</span>
            </div>
        </div>
`
        container.innerHTML += video

    }
}
sorting(videos)

