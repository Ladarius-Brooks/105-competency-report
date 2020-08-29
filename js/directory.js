function display(){
var pets = salon.pets;
const dogImg = "imageSrc='img/dog.png'";
const catImg = "imageSrc='img/cat.png'";
const fishImg = "imageSrc='img/fish.png'";

const petSection = document.getElementById('pets');
var text="";
var icon;


for(var i=0;i<pets.length;i++){
    if(pets[i].type === "Dog"){
        icon=dogImg;
    }else if(pets[i].type === "Cat"){
        icon=catImg;
    }else if (pets[i].type === "Fish"){
        icon=fishImg;
    }

    text+=`
        <div class="pet">
            <h2>${pets[i].name}</h2>
            <img class = "icons" src="${icon}">
            <p>${pets[i].age}</p>
            <p>${pets[i].type}</p>
            <p>${pets[i].breed}</p>
            <p>${pets[i].gender}</p>
            <p>${pets[i].service}</p>
            <p>${pets[i].ownersName}</p>
            <p>${pets[i].contactPhone}</p>
            <p>${pets[i].covidOption}</p>
        </div>
    `;
}
petSection.innerHTML=text;
}

display();
