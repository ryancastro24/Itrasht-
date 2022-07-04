"use strict"

setInterval(cardCalendarAdjust,1000)

function cardCalendarAdjust(){
    let cardContainer = document.querySelectorAll(".calendar-dates-card");
    if(window.matchMedia("(max-width: 450px").matches){
        for(let i = 0; i < cardContainer.length; i++){
            cardContainer[i].style.width = "40px";
            cardContainer[i].style.height = "40px";
        }
    }
    else if(window.matchMedia("(max-width: 650px").matches){
        for(let i = 0; i < cardContainer.length; i++){
            cardContainer[i].style.width = "50px";
            cardContainer[i].style.height = "50px";
        }
    }
    else if(window.matchMedia("(max-width: 850px").matches){
        for(let i = 0; i < cardContainer.length; i++){
            cardContainer[i].style.width = "80px";
            cardContainer[i].style.height = "80px";
        }
    }

    else if(window.matchMedia("(max-width:1000px").matches){
        for(let i = 0; i < cardContainer.length; i++){
            cardContainer[i].style.width = "100px";
            cardContainer[i].style.height = "100px";
        }
    }
    else{
        for(let i = 0; i < cardContainer.length; i++){
            cardContainer[i].style.width = "120px";
            cardContainer[i].style.height = "120px";
        }
    }
        
           
        
    }



    function openSidenav(){
        let sidenav = document.getElementById("sidenav");
        sidenav.style.width = '100%'
    }
    
    
    function closeSidenav(){
        let sidenav = document.getElementById("sidenav");
        sidenav.style.width = '0%'
    }
    
