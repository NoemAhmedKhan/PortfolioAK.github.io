// Portfolio Image Selected
let image = document.getElementById('portfolio-img');
// About Me PORTFOLIO Elements Selected
let AboutMe = document.getElementsByClassName('about-me');
let splitAboutMe;
// Education PORTFOLIO Elements Selected
let Education = document.getElementsByClassName('education');
let splitEducation;
// Skill PORTFOLIO Elements Selected
let Skill = document.getElementsByClassName('skills');
let splitSkill;
// Work Experience PORTFOLIO Elements Selected
let workExp = document.getElementsByClassName('work-experience');
let splitworkExp;
// Achievements PORTFOLIO Elements Selected
let Achieve = document.getElementsByClassName('achievements');
let splitAchieve;
// Contact Me PORTFOLIO Elements Selected
let contactMe = document.getElementsByClassName('cntct-me');
let splitcontactMe;

// indicator for setting some values in portfolio
let indicator = 0;
let len;

function setValues(){
    // Setting Image URL In Portfolio
    image.setAttribute('src', localStorage.getItem("URL"));


    // Splitted Items Of Contact Me From LocalStorage
    splitcontactMe = localStorage.getItem("ContactMe").split(',');
    // Setting Contact Me Values In Portfolio

    for(let i = 0; i < 8; i++){

        // setting Email, Yahoo Mail, and Phone No. by if else-if condition
        if(i == 7){
            contactMe[i].lastElementChild.innerHTML = splitcontactMe[i];
        }
        else if(i == 6){
            contactMe[i].setAttribute('href', `mailto: ${splitcontactMe[i]}`);
        }
        else if(i == 5){
            contactMe[i].setAttribute('href', `mailto: ${splitcontactMe[i]}`);
        }

        // setting all social links except Email, Yahoo Mail, and Phone No.
        else{
            contactMe[i].setAttribute('href', splitcontactMe[i]);
        }
    }

    // Splitted Items Of About Me From LocalStorage
    splitAboutMe = localStorage.getItem("AboutMe").split(',');
    // Setting About Me Values In Portfolio
    for(let i = 0; i < 7; i++){
        if(splitAboutMe[i] == ""){
            AboutMe[i].innerHTML = "--------";
        }else if(i < 2){
            // Setting First Name And Last Name
            AboutMe[i].innerHTML = splitAboutMe[i];
        }else if(i == 2){
            // Setting Job In Portfolio
            AboutMe[i].innerHTML = ` I am a ${splitAboutMe[i + 1]}`;
        }else if(i == 3){
            // Setting Date Of Birth In Portfolio
            AboutMe[i].innerHTML = `( ${splitAboutMe[i - 1]} )`;
        }else if(i > 3){
            AboutMe[i].innerHTML = splitAboutMe[i];
        }
    }


    // Splitted Items Of Education From LocalStorage
    splitEducation = localStorage.getItem("Education").split(',');
    // Setting Education Values In Portfolio
    indicator = 0;
    len = 3;

    for(let i = 0; i < (Education.length / 4); i++){
        // setting degree names
        Education[len - 3].innerHTML = `${splitEducation[indicator]}:`;
        // setting institution names
        Education[len - 2].innerHTML = splitEducation[indicator + 1];
        // setting year of start and end
        Education[len - 1].innerHTML = `( ${splitEducation[indicator + 3]} - ${splitEducation[indicator + 4]} )`;
        // setting description
        Education[len].innerHTML = splitEducation[indicator + 2];

        indicator = indicator + 5;
        len = len + 4;
    }


    // Splitted Items Of Skills From LocalStorage
    splitSkill = localStorage.getItem("Skills").split(',');
    // Setting Skill Values In Portfolio
    len = 3;
    for(let i = 0; i < (Skill.length / 4); i++){
        // setting skill names
        Skill[len - 3].innerHTML = splitSkill[len - 3];
        // setting success bars
        Skill[len - 2].style.backgroundImage = `linear-gradient(to right, #3498db ${splitSkill[len - 2]}%, #ecf0f1 ${100% - splitSkill[len - 2]}%)`;
        // setting description
        Skill[len - 1].innerHTML = splitSkill[len-1];
        // setting attribute and project work link
        Skill[len].setAttribute('href', splitSkill[len]);
        Skill[len].innerHTML = splitSkill[len];

        len = len + 4;
    }


    // Splitted Items Of Work Experience From LocalStorage
    splitworkExp = localStorage.getItem("Work Experience").split(',');
    // Setting Work Experience Values In Portfolio
    indicator = 0;
    len = 4;

    for(let i = 0; i < (workExp.length / 5); i++){
        // setting work names
        workExp[len - 4].innerHTML = splitworkExp[indicator];
        // setting work place names
        workExp[len - 3].innerHTML = splitworkExp[indicator + 1];
        // setting experience
        var joinDate = new Date( splitworkExp[indicator + 3] );
        var resignDate = new Date( splitworkExp[indicator + 4] );
        workExp[len - 2].innerHTML = `[ ${joinDate.toDateString()} ---- ${resignDate.toDateString()} ]`;
        // setting description
        workExp[len - 1].innerHTML = splitworkExp[indicator + 5];
        // setting sample project link
        workExp[len].setAttribute('href', splitworkExp[indicator + 2]);
        workExp[len].innerHTML = splitworkExp[indicator + 2];

        indicator = indicator + 6;
        len = len + 5;
    }


    // Splitted Items Of Achievements From LocalStorage
    splitAchieve = localStorage.getItem("Achievements / Awards").split(',');
    // Setting Achievement Values In Portfolio
    for(let i = 0; i < Achieve.length; i++){
        if(i%2 == 0){
            Achieve[i].innerHTML = `${splitAchieve[i]}:`;
        }else{
            Achieve[i].innerHTML = splitAchieve[i];
        }
    }

}

window.addEventListener('DOMContentLoaded', setValues);