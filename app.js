const dark=document.querySelector(".dark");
const night= document.querySelector(".night");
const light= document.querySelector(".light");
const sidebar=document.querySelector(".sidebar");
const activelistitem=document.querySelector(".list-item.active");

dark.addEventListener("click",()=>{
    sidebar.className="sidebar";
    activelistitem="list-item.active";
})

night.addEventListener("click",()=>{
    sidebar.className="sidebar night";
    activelistitem="list-item.active night";
})
light.addEventListener("click",()=>{
    sidebar.className="sidebar light";
    activelistitem="list-item.active light";
})