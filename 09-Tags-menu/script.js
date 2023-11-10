const spanTags= document.getElementsByTagName("span");
const selectTag = document.getElementsByClassName("hover-menu")[0]

    let homeTag = document.getElementsByTagName("span")[0]
    let homeTagWidth = homeTag.offsetWidth
    let homeTagLeftShit = homeTag.offsetLeft

    selectTag.style.width = homeTagWidth+"px"
    selectTag.style.transform = `translateX(${homeTagLeftShit}px)`


    for (let i = 0; i < spanTags.length; i++) {
        spanTags[i].id = i;

        spanTags[i].addEventListener("click", () => {
            const selectId = document.getElementById(`${spanTags[i].id}`)
            const selectWidth = selectId.offsetWidth
            const leftShit =selectId.offsetLeft
            selectTag.style.width = `${selectWidth}px`
            selectTag.style.transform = `translateX(${leftShit}px)`
        }

    )}
       


    
