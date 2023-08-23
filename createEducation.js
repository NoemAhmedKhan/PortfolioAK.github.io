// Education variable will help to create no. of items in portfolio page
let Education = 0;
// div, label, input, textarea, textnode, button, create all are used to create elements before cancel button in education fieldset 
let div_edu;
let label_edu;
let input_edu;
let textarea_edu;
let textNode_edu = ["Degree / Certificate:", "Institution:", "Describe:", "Year Of Starting:", "Year Of Completion:"];
let button_edu = document.getElementById('education-btn');
let create_edu = document.getElementById('edu-fieldset').lastElementChild.previousElementSibling;
// education cancel button variable
let cancelButton_edu = document.getElementById('education-cancel-btn');
// variable to store created elements by javascript inside education fieldset
let createdDiv_edu;


function createItems(){
    // increment of education counter on clicked the create element button and store at local storage
    Education = Education + 1;
    localStorage.setItem("educationCounter", Education);

    // if condition to create cancel button once time only (Education = 1 means the new items section created 1 time)
    if(Education == 1){
        cancelButton_edu.parentElement.style.cssText += "display: flex";
    }


    // creating div, label, textNode, adding class on created div, inserting label inside div and inserting div before cancel button
    // it is div1 which contain degree, institute, and description
    div_edu = document.createElement('div');
    div_edu.classList.add("createdDivEducation");
    create_edu.insertAdjacentElement('beforebegin', div_edu);

    for(let i = 0; i < 3; i++){
        label_edu = document.createElement('label');
        label_edu.textContent = textNode_edu[i];
        div_edu.appendChild(label_edu);

        // if condition to create text area of description
        if(i == 2){
            textarea_edu = document.createElement('textarea');
            textarea_edu.classList.add("education");
            div_edu.appendChild(textarea_edu);
            continue;
        }

        // creating, adding class, and appending input
        input_edu = document.createElement('input');
        input_edu.setAttribute("type", "text");
        input_edu.classList.add("education");
        div_edu.appendChild(input_edu);  
    }


    // it is div2 which contain year of starting and year of ending inputs
    div_edu = document.createElement('div');
    div_edu.classList.add("createdDivEducation");
    create_edu.insertAdjacentElement('beforebegin', div_edu);

    for(let i = 0; i < 2; i++){
        label_edu = document.createElement('label');
        label_edu.textContent = textNode_edu[i+3];
        div_edu.appendChild(label_edu);

        input_edu = document.createElement('input');
        input_edu.setAttribute("type", "number");
        input_edu.classList.add("education");
        div_edu.appendChild(input_edu);  
    }

}

// create elements event called
button_edu.addEventListener('click', createItems);


// selected all created divs
createdDiv_edu = document.getElementsByClassName('createdDivEducation');

function removeItems(){
    // if condition to remove div1 and div2 means (1 complete education section) and decrement in education counter and store at local storage
    if(Education != 0){
        // for-loop to remove the created divs by applying display none and remove the class createdDivEducation
        for(let i = 0; i < 2; i++){
            createdDiv_edu[createdDiv_edu.length - 1].style.cssText = "display: none";
            createdDiv_edu[createdDiv_edu.length - 1].remove("createdDivEducation");
        }


        // decrement in education counter and store at localstorage
        Education = Education - 1;
        localStorage.setItem("educationCounter", Education);

        // if condtion to remove cancel button at cancellation of last education section that was created first when createItems function was called
        if(Education == 0){
            cancelButton_edu.parentElement.style.cssText += "display: none";
        }

    }
}

// cancel button event called
cancelButton_edu.addEventListener('click', removeItems);