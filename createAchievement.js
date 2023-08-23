// Achievements variable will help to create no. of items in portfolio page
let Achieve = 0;
// div, label, input, textarea, textnode, button, create all are used to create elements before cancel button in achievements fieldset 
let div_achieve;
let label_achieve;
let input_achieve;
let textarea_achieve;
let textNode_achieve = ["Achievement:", "Description:"];
let button_achieve = document.getElementById('achievements-btn');
let create_achieve = document.getElementById('achievements-fieldset').lastElementChild.previousElementSibling;
// achievements cancel button variable
let cancelButton_achieve = document.getElementById('achievements-cancel-btn');
// variable to store created elements by javascript inside achievements fieldset
let createdDiv_achieve;


function createItems(){

    Achieve = Achieve + 1;
    localStorage.setItem("achievementsCounter", Achieve);

    // if condition to create cancel button once time only (Achieve = 1 means the new items section created 1 time)
    if(Achieve == 1){
        cancelButton_achieve.parentElement.style.cssText += "display: flex";
    }


    for(let i = 0; i < 2; i++){
        // creating div, label, textNode, adding class on created div, inserting label inside div and inserting div before cancel button
        div_achieve = document.createElement('div');
        div_achieve.classList.add("createdDivAchieve");
        create_achieve.insertAdjacentElement('beforebegin', div_achieve);

        // creating and appending label inside the div
        label_achieve = document.createElement('label');
        label_achieve.textContent = textNode_achieve[i];
        div_achieve.appendChild(label_achieve);

        // if condition to create input with setAttribute type="text" and appending input inside the div
        if(i == 0){
            input_achieve = document.createElement('input');
            input_achieve.setAttribute('type', 'text');
            input_achieve.classList.add("achievements");
            div_achieve.appendChild(input_achieve);
        }
        // else condition to create textarea and appending inside the div
        else{
            textarea_achieve = document.createElement('textarea');
            textarea_achieve.classList.add("achievements");
            div_achieve.appendChild(textarea_achieve);
        }
    }
}

// createItems event called
button_achieve.addEventListener('click', createItems);


// selected all created divs
createdDiv_achieve = document.getElementsByClassName('createdDivAchieve');

function removeItems(){
    // if condition to remove div1 and div2 means (1 complete work experience section) and decrement in work experience counter and store at local storage
    if(Achieve != 0){
        // for-loop to remove the created divs by applying display none and remove the class createdDivAchieve
        for(let i = 0; i < 2; i++){
            createdDiv_achieve[createdDiv_achieve.length - 1].style.cssText = "display: none";
            createdDiv_achieve[createdDiv_achieve.length - 1].remove("createdDivAchieve");
        }
    
        // decrement in achieve counter and store at localstorage
        Achieve = Achieve - 1;
        localStorage.setItem("achievementsCounter", Achieve);

        // if condtion to remove cancel button at cancellation of last work experience section that was created first when createItems function was called
        if(Achieve == 0){
            cancelButton_achieve.parentElement.style.cssText += "display: none";
        }
    }

}

cancelButton_achieve.addEventListener('click', removeItems);