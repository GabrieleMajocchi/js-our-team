
const teamMembers = [
    {name: 'Wayne Barnett',
    role: 'Founder & CEO',
    pic: 'wayne-barnett-founder-ceo.jpg',},
    {name: 'Angela Caroll',
    role: 'Chief Editor',
    pic: 'angela-caroll-chief-editor.jpg',},
    {name: 'Walter Gordon',
    role: 'Office Manager',
    pic: 'walter-gordon-office-manager.jpg',},
    {name: 'Angela Lopez',
    role: 'Social Media Manager',
    pic: 'angela-lopez-social-media-manager.jpg',},
    {name: 'Scott Estrada',
    role: 'Developer',
    pic: 'scott-estrada-developer.jpg',},
    {name: 'Barbara Ramos',
    role: 'Graphic Designer',
    pic: 'barbara-ramos-graphic-designer.jpg',}
]

const main = document.querySelector('main');

for (let i = 0; i<teamMembers.length; i++){
    const member = teamMembers[i];

    for (info in member){
        main.innerHTML += '<p>'+info+':'+member[info]+'</p>';
    }
    main.innerHTML += '<br>';
}