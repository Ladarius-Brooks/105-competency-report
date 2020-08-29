console.log("Executed");

// object literal for the pet salon
const salon={
    name:"The Fashion Pet",
    phone:"972-274-3431",
    address:{
        city:"Dallas,Tx",
        av:"713 Bahama Ln",
        number:"972-274-3431"

    },
    pets:[]
}
console.log(salon);
let {name,phone,address:{city,number,av}}=salon
console.log(city);


// document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
<br><b> ${city}, ${av} ${number} </b> 
</p>`;

// template string is above

// object constructor for the pets
var c=1;
class Pet{
    constructor(name,age,type,nature,breed,gender,service,ownersName,contactPhone,covidOption){
        this.name=name;
        this.age=age;
        this.type=type;
        this.nature=nature;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.covidOption=covidOption;
        this.id=c;
        c++;
    }
}
const scooby=new Pet("Scooby",50,"Dog","Timid","Dane","Male","Full Service","Shaggy","555-555-5555","appointment");
console.log(scooby);

const scrappy = new Pet("Scrappy",30,"Dog","Aggressive","Dane","Male","Nails cut","Shaggy","555-555-5555","pick up");
console.log(scrappy);

// add two more objects
const tyson =new Pet("Tyson",14,"Dog","Mean","Roc","Male","Ears Trimmed","Ladarius","555-444-3322","pick up");
console.log(tyson);
const diamond = new Pet("Diamond",15,"Dog","Kind","Roc","Girl","Ears Trimmed","Daryl","444-222-5999","appointment");
console.log(diamond);
// add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(tyson);
salon.pets.push(diamond);

console.log(salon.pets.length); // display the number of elements in the array

// alert(salon.name);

// use the for loop to push yourself
var dogs = ["Scooby", "Scrappy", "Tyson", "Diamond"];

dogs.forEach(function(dogs) {
    // alert(dogs);
});
// log dogs on the console
for (var dog of dogs){
    console.log(dog);
};

// get the info save in vars using id
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtnature=document.getElementById("petNature");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtservice=document.getElementById("petService");
var txtowner=document.getElementById("petOwner");
var txtcontact=document.getElementById("petContact");
var txtcovidoption=document.getElementById("petCovid");
// register function
function register(){


    // create the pet object (generic)
    var thePet = new Pet(txtname.value,txtage.value,txttype.value,txtnature.value,txtbreed.value,txtgender.value,txtservice.value,txtowner.value,txtcontact.value,txtcovidoption.value);
    console.log(thePet);


        // push the pet  into the array
    salon.pets.push(thePet);
    console.log(salon.pets);
    // clear the input
    clear();
    // display(); // directory.js
    displayTable(thePet);
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtnature.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservice.value="";
    txtowner.value="";
    txtcontact.value="";
    txtcovidoption.value="";

}
// display on the console the oldest pet and the youngest pet
// add CSS to the form.
// display in HTML how many pets we have and if you add more it updates


function displayTable(aPet){
    var tbody=document.getElementById('rowPet');
    var row = `<tr id="${aPet.id}">
                <td>${aPet.name} </td>
                <td>${aPet.age} </td>
                <td>${aPet.type} </td>
                <td>${aPet.nature}</td>
                <td>${aPet.gender} </td>
                <td>${aPet.breed} </td>
                <td>${aPet.service} </td>
                <td>${aPet.ownersName} </td>
                <td>${aPet.contactPhone} </td>
                <td>${aPet.covidOption}</td>
                <td> <button class="btn-danger" onclick="deletePet(${aPet.id})"> Delete </button> </td>     
                `;
    tbody.innerHTML+=row;
}

// displayTable(scooby);
// displayTable(scrappy);

function deletePet(petID){
    // select the element to delete
    var tr=$('#'+petID);
    var indexDelete;  // important thing is to know the position

    // travel the array (search function)
    for(var i=0; i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petID){
            indexDelete=i;
        }

    }

    // delete the pet from the array
    salon.pets.splice(indexDelete,1);
    // delete the pet from the HTML
    tr.remove();
}

function searchPet(){
    var ss=$('#petSearch').val();  // val = value on javascript
    var searchString = ss.toLowerCase();
    
    for(var i=0; i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase()===searchString || selected.service.toLowerCase()===searchString || selected.type.toLowerCase()===searchString){
            $("#"+selected.id).addClass('red-bg')
            
        }
    }
}


// add the search option by: type, service
// add gallery from left to right



function init(){
    displayTable(scooby);
    displayTable(scrappy);
    displayTable(tyson);
    displayTable(diamond);

    $('#btn-register').click(register);
    $('#petContact').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            console.log("add the pet");
            register();
        }
    });

}

// window.onload=init;
$(document).ready(()=>init());


