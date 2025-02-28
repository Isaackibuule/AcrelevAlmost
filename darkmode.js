let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')

//invert filter
    const mapIframe = document.querySelector('.Mapcontainer iframe');
if(mapIframe) {
    mapIframe.style.filter= 'invert(100%)';

}

    
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)

    //remove invert 
    const mapIframe = document.querySelector('.Mapcontainer iframe');
if(mapIframe) {
    mapIframe.style.filter= 'none';

}

}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})










