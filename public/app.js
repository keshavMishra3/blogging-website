
let btns = document.getElementsByClassName("deleteBtn");

for(btn of btns){
    btn.addEventListener("click",()=>{
        
        alert("Are you sure you want to delete this chat?")
    })
}
