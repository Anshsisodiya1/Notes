const notes = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input");

function shownotes(){
    notes.innerHTML = localStorage
}

function updateStorage(){
    localStorage.setItem("notes",notes.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let input = document.createElement("p");
    let img = document.createElement("img");
    input.className = "input";
    input.setAttribute("contenteditable","true");
    img.src = "images\delete.svg";
    notes.appendChild(input).appendChild(img);
})

notes.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll("input")
        note.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
