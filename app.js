// document.getElementsByTagName('li')[1].addEventListener('click',function(){
//     var targetPos= 463;
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         }
//         currentPos+=50;
//         window.scrollBy(0,50)   
//     }, 50)
// }) 

// document.getElementsByTagName('li')[2].addEventListener('click',function(){
//     var targetPos= 930;
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         }
//         currentPos+=50;
//         window.scrollBy(0,50)   
//     }, 50)
// })

// document.getElementsByTagName('li')[4].addEventListener('click',function(){
//     var targetPos= 2300;
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         }
//         currentPos+=50;
//         window.scrollBy(0,50)   
//     }, 50)
// })

// document.getElementsByTagName('li')[5].addEventListener('click',function(){
//     var targetPos= 3200;
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         }
//         currentPos+=50;
//         window.scrollBy(0,50)   
//     }, 50)
// })



// document.getElementsByTagName('li')[6].addEventListener('click',function(){
//     var targetPos= 4100;
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         }
//         currentPos+=50;
//         window.scrollBy(0,50)   
//     }, 50)
// })




// document.getElementsByTagName('li')[3].addEventListener('click',function(){
//     var targetPos = 1350
//     var currentPos = 0 

//     var scrollAnimation = setInterval(function(){
//         if(currentPos>=targetPos){
//             clearInterval(scrollAnimation)
//         } 

//         currentPos +=50;
//         window.scrollBy(0,50)
//     }, 50)
// })




// --SCROLL LOGIC ----

var navAnchorTags = document.querySelectorAll('.nav-menu a') 
// console.log(navAnchorTags)
var interval;
for(var i=0 ;i<navAnchorTags.length; i++){
    navAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var sectionID = this.textContent.trim().toLowerCase(); 
        // console.log(sectionID)
        var targetSection= document.getElementById(sectionID);
        // console.log(targetSection) 

        //  interval = setInterval(scrollVertically, 20, targetSection) 

        interval = setInterval(function(){
            scrollVertically(targetSection)
        },20)
          
    });
    
} 


function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect()
            // console.log(targetSectionCoordinates)
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval)
                return;
            }
            window.scrollBy(0,50);
} 




// ---AUTO FILL OF SKILL BARS----

var progressBars = document.querySelectorAll('.skill-progress >div') 
var skillsContainer = document.getElementById('skills-container')
window.addEventListener('scroll', checkScroll)
var animationDone = false



function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 +'%'
    }
}

initializeBars() 

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width')
        let currentWidth = 0
        let interval = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval) 
                return
            } 
            currentWidth++;
            bar.style.width = currentWidth + '%'
        },3)
    }
}

function checkScroll(){
    //We have to check if the skill container is visible or not
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<= window.innerHeight){
        animationDone = true 
        console.log("Skills container Visible") 
        fillBars()
    } else if(coordinates.top > window.innerHeight){
        animationDone = false
        initializeBars();
    }
}