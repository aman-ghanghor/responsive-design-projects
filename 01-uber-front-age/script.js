const company_dropdown_btn = document.querySelector(".company-dropdown-btn");
const company_dropdown = document.querySelector(".company-dropdown");
const front_bg = document.getElementById("front_bg") ;
const banner_bg = document.getElementById("banner_bg") ;

/*

--> dropdown can also be created by using css :focus-within psueodo class to toggle
    visibility of dropdown

*/

document.addEventListener("click", (e)=>{
    if(e.target.closest(".company-dropdown-btn")) {
       company_dropdown.classList.toggle("show-company-dropdown") ;
    }
    else if(e.target.closest(".company-dropdown")){
       //..
    }
    else{
      company_dropdown.classList.remove("show-company-dropdown") ;
    }
})


// changing front_bg image dynamically
window.addEventListener("resize", (e)=>{
   console.log(window.innerWidth )
   if(window.innerWidth < 1024){
     front_bg.src = "./assets/images/png/Rider_Home_bg_tablet.png" ;
     banner_bg.src = "./assets/images/png/DotCom_Update_U4B_bg_ipad.png" ;
   }
   else if(window.innerWidth < 600) {
     front_bg.src = "./assets/images/png/Rider_Home_bg_mobile.png"
     banner_bg.src = "./assets/images/png/DotCom_Update_U4B_bg_mobileD.png" ;
   }
   else {
     front_bg.src = "./assets/images/png/Rider_Home_bg_desktop2x.png"
   }

})

// changing banner bg image