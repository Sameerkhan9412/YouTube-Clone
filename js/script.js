let menuIcon=document.querySelector(".menu-icon");
let sidebar=document.querySelector(".sidebar");
let container=document.querySelector(".container");
let subscribeBtn=document.querySelector("#SubscribeBtn")
let notificationBell=document.querySelector(".notification-bell")
menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    // container.classList.toggle("large-container");
}

subscribeBtn.onclick=function(){
    subscribeBtn.classList.toggle("subscribed");
    if(this.innerText="Subscribe"){
        subscribeBtn.innerText="Subscribed";
    }
}

// function subscribe(){
//     this.innerText="Subscribed";
//     this.classList.add("subscribed");
// }
