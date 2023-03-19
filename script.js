
// function Game(userturn,pcturn){
//     const userselection = document.getElementById("UserSelection");
//     const pcselection = document.getElementById("PCSelection")
//     if( userturn === pcturn){
//         userselection.innerhtml =  `<button id= "userimg"><img src="${userturn}.png" alt="${userturn}"></button>`
//         pcselection.innerhtml =  `<button id= "pcimg"><img src="${pcturn}.png" alt="${pcturn}"></button>`
//         return "TIE GAME"
//     }
// }
userscore = document.getElementById("YScore")
pcscore = document.getElementById("CScore")

let Uscore = localStorage.getItem('YScore')||0
let Cscore = localStorage.getItem('CScore')||0 
userscore.innerText = Uscore
pcscore.innerText = Cscore
pcoptions = ["rock","paper","scissor"]
const StartGame = ()=> {
    const r = document.getElementById("rock");
    const p = document.getElementById("paper");
    const s = document.getElementById("scissor");
    const header = document.querySelector(".header");
    const GameArea = document.querySelector(".GameArea");
    const ResultArea = document.querySelector(".ResultArea");
    const userselection = document.getElementById("UserSelection");
    const pcselection =  document.getElementById("PCSelection");
    const resulttext = document.getElementById("resulttext");
    const playagain = document.getElementById("playagain");
    const rules = document.getElementById("rules");
    const fullRules = document.querySelector(".full-rules");
    const closebutton =document.getElementById("closeButton")
    const rulesbutton = document.querySelector(".rulesbutton")
    const nextbutton = document.querySelector(".nextbutton")
    const gamescreen = document.querySelector(".GameScreen")
    const trophypage = document.querySelector(".TrophyPage")
    const msgrules = document.getElementById("msgrules")
    const Trophyrules = document.querySelector(".Trophyrules")
    const footerbutton = document.querySelector(".footer-button")
    const msgplayagain = document.getElementById("msgplayagain")
    var audio = new Audio('crowd-cheer-ii-6263.mp3')
    r.addEventListener("click", ()=>{
        ResultArea.classList.remove("FadeOut")
        GameArea.classList.add("fadeOut");
        ResultArea.classList.remove("fadeOut");
        const userturn = 'rock';
        const pcturn = pcoptions[Math.floor(Math.random()*3)];
        if( userturn === pcturn){
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "TIE GAME"
            resulttext.innerHTML = output
        }
        else if (userturn==="rock" && pcturn==="scissor"){
            Uscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result winresult"  ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU WIN <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
        }
        else{
            Cscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result winresult"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU LOST <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
        }
    })
    p.addEventListener("click", ()=>{
        ResultArea.classList.remove("FadeOut")
        GameArea.classList.add("fadeOut");
        ResultArea.classList.remove("fadeOut");
        const userturn = 'paper';
        const pcturn = pcoptions[Math.floor(Math.random()*3)];
        if( userturn === pcturn){
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "TIE GAME"
            resulttext.innerHTML = output
            }
        else if (userturn==="paper" && pcturn==="rock"){
            Uscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result winresult"  ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU WIN <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
            }
        else{
            Cscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result winresult"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU LOST <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
            }
            
        })
    s.addEventListener("click", ()=>{
        ResultArea.classList.remove("FadeOut")
        GameArea.classList.add("fadeOut");
        ResultArea.classList.remove("fadeOut");
        const userturn = 'scissor';
        const pcturn = pcoptions[Math.floor(Math.random()*3)];
        if( userturn === pcturn){
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "TIE GAME"
            resulttext.innerHTML = output
                }
        else if (userturn==="scissor" && pcturn==="paper"){
            Uscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result winresult"  ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU WIN <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
                }
        else{
            Cscore++
            UpdateScore()
            userselection.innerHTML =`<button id="userimg" class="${userturn}result" ><img id="${userturn}img" src="${userturn}.png" />`
            pcselection.innerHTML = `<button id="pcimg" class="${pcturn}result winresult"><img id="${pcturn}img" src="${pcturn}.png" />`
            const output = "YOU LOST <br /><span id='againpc' >AGAINST PC<span>"
            resulttext.innerHTML = output
                }
                
            })
    playagain.addEventListener("click", ()=>{
        ResultArea.classList.add("fadeOut");
        GameArea.classList.remove("fadeOut");
    })

    rules.addEventListener("click",()=>{
        fullRules.classList.add("fadeIn")

    })

    msgrules.addEventListener("click",()=>{
        fullRules.classList.add("fadeIn")

    })

    msgplayagain.addEventListener("click",()=>{
        trophypage.classList.add("fadeOut")
        footerbutton.classList.remove("fadeOut")
        header.classList.remove("fadeOut")
        GameArea.classList.remove("fadeOut")
        audio.pause();
    })

    closebutton.addEventListener("click",()=>{
        fullRules.classList.remove("fadeIn")
    })

    nextbutton.addEventListener("click",()=>{
        header.classList.add("fadeOut")
        GameArea.classList.add("fadeOut")
        ResultArea.classList.add("FadeOut")
        footerbutton.classList.add("fadeOut")
        trophypage.classList.remove("fadeOut")
        audio.play()
       })

    function UpdateScore() {
        userscore.innerText = Uscore
        pcscore.innerText = Cscore
        if (Uscore> Cscore){
            rulesbutton.classList.remove("left-rules")
            nextbutton.classList.remove("fadeOut")
        }
        else{
            rulesbutton.classList.add("left-rules")
            nextbutton.classList.add("fadeOut")
        }
    }
}
StartGame();
