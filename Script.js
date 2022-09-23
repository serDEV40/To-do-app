var getNote = document.getElementById("getNote");
var okNote = document.querySelector("#okNote");
var list_group = document.querySelector(".list-group");
let deleteBtns;

okNote.addEventListener("click",(event)=>{
    event.preventDefault();
    oppenheimer(getNote.value);
    getNote.value = "";
});

function oppenheimer(nodeValue){
    var liat = document.createElement("li");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var span = document.createElement("span");
    var bttn = document.createElement("button");
    liat.classList.add("list-group-item","align-items-center","justify-content-between","d-flex");
    span.classList.add("card-text");
    bttn.classList.add("btn","btn-danger")
    div1.style.width = "calc(100% - 95px)";
    liat.appendChild(div1);
    liat.appendChild(div2);
    bttn.setAttribute("id","delete");
    bttn.textContent = "Delete Task";
    div2.appendChild(bttn);
    div1.appendChild(span);
    span.textContent = nodeValue;
    list_group.appendChild(liat);
    let allBttn = document.querySelectorAll("#delete");
    for(var i=0; i<allBttn.length ;i++){
        allBttn[i].addEventListener('click',(e)=>{
            (e.target.parentElement.parentElement.remove());
        })
    }
};