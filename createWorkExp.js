// Work Experience variable will help to create no. of items in portfolio page
let WorkExp = 0;
// div, label, input, textarea, textnode, button, create all are used to create elements before cancel button in work experience fieldset 
let div_workExp;
let label_workExp;
let input_workExp;
let textarea_workExp;
let textNode_workExp = ["Work:", "At Place:", "Sample Work:", "Joining Date:", "Resigning Date:", "Description:"];
let button_workExp = document.getElementById('workexp-btn');
let create_workExp = document.getElementById('workExperience-fieldset').lastElementChild.previousElementSibling;
// work experience cancel button variable
let cancelButton_workExp = document.getElementById('workexp-cancel-btn');
// variable to store created elements by javascript inside work experience fieldset
let createdDiv_workExp;


function createItems(){

    WorkExp = WorkExp + 1;
    localStorage.setItem("workexpCounter", WorkExp);

    // if condition to create cancel button once time only (WorkExp = 1 means the new items section created 1 time)
    if(WorkExp == 1){
        cancelButton_workExp.parentElement.style.cssText += "display: flex";
    }

    // creating div, label, textNode, select, adding class on created div, inserting label inside div and inserting div before cancel button
    let indicate = 0;  // this will help to indicate textNode of label and creating input, textarea, and set their attributes type=text, url, date.
    for(let i = 0; i < 2; i++){
        // here 2 div will be create for work experience with class="createdDivWorkExp"
        div_workExp = document.createElement('div');
        div_workExp.classList.add("createdDivWorkExp");
        create_workExp.insertAdjacentElement('beforebegin', div_workExp);

        for(let j = 0; j < 3; j++){
            // here label will be create for all six items in 2 divs
            label_workExp = document.createElement('label');
            label_workExp.textContent = textNode_workExp[indicate];
            div_workExp.appendChild(label_workExp);
            indicate = indicate + 1;

            // if condition to create textarea at last and append inside the div
            if(indicate == 6){
                textarea_workExp = document.createElement('textarea');
                textarea_workExp.classList.add("work-exp");
                div_workExp.appendChild(textarea_workExp);
            }
            // else condition to create all input fields and append inside the div
            else{
                input_workExp = document.createElement('input');
                input_workExp.classList.add("work-exp");

                // if else-if else condition to check the created input place and setAttribute type=text, url, date
                if( (indicate - 1) < 2 ){ input_workExp.setAttribute('type', 'text') }
                else if( (indicate - 1) == 2 ){ input_workExp.setAttribute('type', 'url') }
                else{ input_workExp.setAttribute('type', 'date') }

                // appending the input fields inside the div
                div_workExp.appendChild(input_workExp);
            }
        }
    }

}

// createItems event called
button_workExp.addEventListener('click', createItems);


// selected all created divs
createdDiv_workExp = document.getElementsByClassName('createdDivWorkExp');

function removeItems(){
    // if condition to remove div1 and div2 means (1 complete work experience section) and decrement in work experience counter and store at local storage
    if(WorkExp != 0){
        // for-loop to remove the created divs by applying display none and remove the class createdDivWorkExp
        for(let i = 0; i < 2; i++){
            createdDiv_workExp[createdDiv_workExp.length - 1].style.cssText = "display: none";
            createdDiv_workExp[createdDiv_workExp.length - 1].remove("createdDivWorkExp");
        }
    
        // decrement in workexp counter and store at localstorage
        WorkExp = WorkExp - 1;
        localStorage.setItem("workexpCounter", WorkExp);

        // if condtion to remove cancel button at cancellation of last work experience section that was created first when createItems function was called
        if(WorkExp == 0){
            cancelButton_workExp.parentElement.style.cssText += "display: none";
        }
    }

}

cancelButton_workExp.addEventListener('click', removeItems);