// Image Selected For Portfolio
import { url } from "./Portfolio_Image.js";
// About Me FORM Elements Selected
let get_abt_me_elm = document.getElementsByClassName('aboutme');
// Education FORM Elements Selected
let get_edu_elm = document.getElementsByClassName('education');
// Skill FORM Elements Selected
let get_skill_elm = document.getElementsByClassName('skills');
// Work Experience FORM Elements Selected
let get_workexp_elm = document.getElementsByClassName('work-exp');
// Achievements FORM Elements Selected
let get_achiev_elm = document.getElementsByClassName('achievements');
// contactme FORM Elements Selected
let get_cnt_me_elm = document.getElementsByClassName('contactme');

// Arrays To Store All Values Get From The FORM
let AboutMe = [ ];
let Education = [ ];
let Skills = [ ];
let WorkExp = [ ];
let Achievements = [ ];
let ContactMe = [ ];


// Function For Getting Values From The Form And Setting Values To The Portfolio
function formSubmit(e){

    // Getting About Me values
    for(let i = 0; i < get_abt_me_elm.length; i++){
        AboutMe[i] = get_abt_me_elm[i].value;
    }

    // Getting Education values
    for(let i = 0; i < get_edu_elm.length; i++){
        Education[i] = get_edu_elm[i].value;

    }

    // Getting Skill values
    for(let i = 0; i < get_skill_elm.length; i++){
        Skills[i] = get_skill_elm[i].value;
    }

    // Getting Work Experience values
    for(let i = 0; i < get_workexp_elm.length; i++){
        WorkExp[i] = get_workexp_elm[i].value;
    }

    // Getting Achievements values
    for(let i = 0; i < get_achiev_elm.length; i++){
        Achievements[i] = get_achiev_elm[i].value;
    }

    // Getting contactme values
    for(let i = 0; i < get_cnt_me_elm.length; i++){
        ContactMe[i] = get_cnt_me_elm[i].value;
    }

    localStorage.setItem("URL", url);
    JSON.stringify(AboutMe);
    localStorage.setItem("AboutMe", AboutMe);
    JSON.stringify(Education);
    localStorage.setItem("Education", Education);
    JSON.stringify(Skills);
    localStorage.setItem("Skills", Skills);
    JSON.stringify(WorkExp);
    localStorage.setItem("Work Experience", WorkExp);
    JSON.stringify(Achievements);
    localStorage.setItem("Achievements / Awards", Achievements);
    JSON.stringify(ContactMe);
    localStorage.setItem("ContactMe", ContactMe);
}

// Submit Button Of Form
let Submit = document.getElementById('submit-btn');
// Click Event Called On Submit Button
Submit.addEventListener('click', formSubmit);