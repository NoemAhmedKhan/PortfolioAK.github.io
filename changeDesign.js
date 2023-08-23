// Top Bar Items Div
let topBarItems = document.getElementById('top-bar-items');
// Top Bar Colors Div
let topBarColors = document.getElementById('top-bar-colors');
// Top Bar Open Close Icons Div
let iconsDiv = document.getElementById('icon');

// Open Close Function Of Top Bar On Width Less Than 900px
function open_close_func(Value){
    if(Value === 'open'){
        iconsDiv.firstElementChild.style.cssText = "animation-name: Rotate-Icon-Animate; animation-duration: 0.35s; animation-iteration-count: 1; animation-timing-function: ease; color: #fed330; border: 2px solid #fed330; box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.75);";
        setTimeout(function(){
            iconsDiv.firstElementChild.style.cssText = "display: none";
            iconsDiv.lastElementChild.style.cssText = "display: inline-block";
            topBarItems.style.cssText = "display: flex";
            topBarColors.style.cssText = "display: flex";
        }, 300);
    }

    else if(Value === 'close'){
        iconsDiv.lastElementChild.style.cssText += "animation-name: Rotate-Icon-Animate; animation-duration: 0.35s; animation-iteration-count: 1; animation-timing-function: ease; color: #fed330; border: 2px solid #fed330; box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.75);";
        setTimeout(function(){
            topBarItems.style.cssText = "display: none";
            topBarColors.style.cssText = "display: none";
            iconsDiv.lastElementChild.style.cssText = "display: none";
            iconsDiv.firstElementChild.style.cssText = "display: inline-block";
        }, 300);
    }
}


// Change Portfolio Design Function
let root = document.documentElement;
function changeDesign(rightDivColor, leftDivColor, headingColor, textColor, skillCards, contactMeText){
    root.style.setProperty('--Balti', rightDivColor);
    root.style.setProperty('--Shadowed', leftDivColor);
    root.style.setProperty('--Flirtatious', headingColor);
    root.style.setProperty('--city', textColor);
    root.style.setProperty('--dark', skillCards);
    root.style.setProperty('--bar', contactMeText);
}