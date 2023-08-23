// Skill variable will help to create no. of items in portfolio page
let Skill = 0;
// div, label, input, select, option, textarea, textnode, button, create all are used to create elements before cancel button in skills fieldset 
let div_skill;
let label_skill;
let input_skill;
let select_skill;
let option_skill;
let textarea_skill;
let textNode_skill = ["Skill:", "How skillful are you?", "Describe Skill:", "Project Link:"];
let button_skill = document.getElementById('skills-btn');
let create_skill = document.getElementById('skills-fieldset').lastElementChild.previousElementSibling;
// skills cancel button variable
let cancelButton_skill = document.getElementById('skills-cancel-btn');
// variable to store created elements by javascript inside skills fieldset
let createdDiv_skill;


function createItems(){
    // increment of skill counter on clicked the create element button and store at local storage
    Skill = Skill + 1;
    localStorage.setItem("skillsCounter", Skill);

    // if condition to create cancel button once time only (Skill = 1 means the new items section created 1 time)
    if(Skill == 1){
        cancelButton_skill.parentElement.style.cssText += "display: flex";
    }


    // creating div, label, textNode, select, adding class on created div, inserting label inside div and inserting div before cancel button
    // it is div1 which contain skill, select, description, and project link
    div_skill = document.createElement('div');
    div_skill.classList.add("createdDivSkills");
    create_skill.insertAdjacentElement('beforebegin', div_skill);

    // creating and appending label of skill
    label_skill = document.createElement('label');
    label_skill.textContent = textNode_skill[0];
    div_skill.appendChild(label_skill);

    // creating and appending input of skill
    input_skill = document.createElement('input');
    input_skill.setAttribute('type', 'text');
    input_skill.classList.add("skills");
    div_skill.appendChild(input_skill);

    // creating and appending select for success bar of skill
    select_skill = document.createElement('select');
    select_skill.classList.add("howGoodAreYou", "skills");
    let indicate = 25; // indicate value and percentage of option inside select tag
    for(let i = 0; i < 5; i++){

        option_skill = document.createElement('option');
        // if condition to create first option with value = "" and selected, disabled property and appending inside select tag
        if(i == 0){
            option_skill.setAttribute('value', '');
            option_skill.disabled = true;
            option_skill.selected = true;
            option_skill.textContent = textNode_skill[i + 1];
            select_skill.appendChild(option_skill);
        }
        // else condition to create other options with value and text and appending inside select tag
        else{
            option_skill.setAttribute('value', `${indicate}`);
            option_skill.textContent = `${indicate}%`;
            select_skill.appendChild(option_skill);
            indicate = indicate + 25;
        }
    }
    // appending whole select inside the div
    div_skill.appendChild(select_skill);


    // second div to create label, text area, and input inside the div
    div_skill = document.createElement('div');
    div_skill.classList.add("createdDivSkills");
    create_skill.insertAdjacentElement('beforebegin', div_skill);

    for(let i = 2; i < 4; i++){
        // creating label and appending inside the div
        label_skill = document.createElement('label');
        label_skill.textContent = textNode_skill[i];
        div_skill.appendChild(label_skill);

        // if condition to create textarea and append inside the div
        if(i == 2){
            textarea_skill = document.createElement('textarea');
            textarea_skill.classList.add("skills");
            div_skill.appendChild(textarea_skill);
        }
        // else condition to create input inside the div
        else{
            input_skill = document.createElement('input');
            input_skill.setAttribute("type", "url");
            input_skill.classList.add("skills");
            div_skill.appendChild(input_skill);
        }
    }

}

// create elements event called
button_skill.addEventListener('click', createItems);


// selected all created divs
createdDiv_skill = document.getElementsByClassName("createdDivSkills");

function removeItems(){
    // if condition to check if skill is not equal to 0 it means skills items are created and the create items event called
    if(Skill != 0){
        // for-loop to remove the created divs by applying display none and remove the class createdDivSkills
        for(let i = 0; i < 2; i++){
            createdDiv_skill[createdDiv_skill.length - 1].style.cssText = "display: none";
            createdDiv_skill[createdDiv_skill.length - 1].remove("createdDivSkills");
        }
    
        // decrement in skills counter and store at local storage
        Skill = Skill - 1;
        localStorage.setItem("skillsCounter", Skill);


        // if condtion to remove cancel button at cancellation of last skills section that was created first when createItems function was called
        if(Skill == 0){
            cancelButton_skill.parentElement.style.cssText += "display: none";
        }

    }
}

// remove items event called
cancelButton_skill.addEventListener('click', removeItems);