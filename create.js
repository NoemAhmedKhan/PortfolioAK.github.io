// Creating Education Items In Portfolio
let create_education = document.getElementById('education-div');
let education = localStorage.getItem('educationCounter');
let h2, h3, p;

for(let i = 0; i < education; i++){
    h2 = document.createElement('h2');
    h2.classList.add('education');
    create_education.insertAdjacentElement('beforeend', h2);

    for(let j = 0; j < 2; j++){
        h3 = document.createElement('h3');
        h3.classList.add('education');
        create_education.insertAdjacentElement('beforeend', h3);
    }

    p = document.createElement('p');
    p.classList.add('education');
    create_education.insertAdjacentElement('beforeend', p);

}


// Creating Skills Items In Portfolio
let create_skills = document.getElementById('cards_div');
let skill = localStorage.getItem('skillsCounter');
let div, cards, a, br;

for(let i = 0; i < skill; i++){
    cards = document.createElement('div');
    cards.classList.add('cards');

    h2 = document.createElement('h2');
    h2.classList.add('skills');
    cards.appendChild(h2);
    br = document.createElement('br');
    cards.appendChild(br);

    div = document.createElement('div');
    div.classList.add('bars', 'skills');
    cards.appendChild(div);
    br = document.createElement('br');
    cards.appendChild(br);

    p = document.createElement('p');
    p.classList.add('skills');
    cards.appendChild(p);
    br = document.createElement('br');
    cards.appendChild(br);

    h3 = document.createElement('h3');
    h3.textContent = "Project Work:";
    cards.appendChild(h3);

    a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.classList.add('skills');
    cards.appendChild(a);

    create_skills.insertAdjacentElement('beforeend', cards);
}


// Creating Work Experience Items In Portfolio
let create_WorkExp = document.getElementById('workexperience');
let workExperience = localStorage.getItem('workexpCounter');
let text = ["Work:", "At Place:", "Experience:", "Description:", "Sample Work:"];

for(let i = 0; i < workExperience; i++){

    for(let j = 0; j < 5; j++){
        if(j == 1){
            h3 = document.createElement('h3');
            h3.classList.add('atplace');
            h3.textContent = text[j];
            create_WorkExp.appendChild(h3);

            p = document.createElement('p');
            p.classList.add('work-experience');
            create_WorkExp.appendChild(p);
        }
        else if(j == 4){
            h2 = document.createElement('h2');
            h2.textContent = text[j];
            create_WorkExp.appendChild(h2);

            p = document.createElement('p');
            a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.classList.add('work-experience');
            p.appendChild(a);
            create_WorkExp.appendChild(p);
        }
        else{
            h2 = document.createElement('h2');
            h2.textContent = text[j];
            create_WorkExp.appendChild(h2);

            p = document.createElement('p');
            p.classList.add('work-experience');
            create_WorkExp.appendChild(p);
        }

        br = document.createElement('br');
        create_WorkExp.appendChild(br);
    }

    br = document.createElement('br');
    create_WorkExp.appendChild(br);
    br = document.createElement('br');
    create_WorkExp.appendChild(br);
}


// Creating Achievements Items In Portfolio
let create_achievements = document.getElementById('achievements');
let achieve = localStorage.getItem('achievementsCounter');

for(let i = 0; i < achieve; i++){
    h2 = document.createElement('h2');
    h2.classList.add('achievements');
    create_achievements.appendChild(h2);

    p = document.createElement('p');
    p.classList.add('achievements');
    create_achievements.appendChild(p);

    br = document.createElement('br');
    create_achievements.appendChild(br);
}