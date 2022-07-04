"use strict"




function openSidenav(){
    let sidenav = document.getElementById("sidenav");
    sidenav.style.width = '100%'
}


function closeSidenav(){
    let sidenav = document.getElementById("sidenav");
    sidenav.style.width = '0%'
}


function openModal(){
    document.getElementById("modal").style.display = "block"
}

function closeModal(){
    document.getElementById("modal").style.display = "none"
}