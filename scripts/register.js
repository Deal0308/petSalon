//object literal
let salon = {
    name: "The Fashion Pet",
    phone: "555-555-5555",
    address: {
        street: "12 & imperial",
        zip: "123",
        number: "12345"
    },
    pets:[]
}
//constructor
function Pet(name,age,breed,service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.service = service;
}   
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");
function isValid(aPet){
    let validation = true;//assuming everything is valid
    if(aPet.value == ""){
        validation = false;
        alert("Please enter a name");
    }
    return validation;
}
//buttons

function register(){
    //get the values from the form
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value);
    if (isValid(newPet)==true){
        salon.pets.push(newPet);
        console.log(salon.pets);
        clearInputs();
    }
    

}
function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputBreed.value = "";
    inputService.value = "";


}
function init(){
    let pet1 =new Pet("Scooby",60,"Dane","Grooming");
    let pet2=new Pet("Buddy",30,"Bulldog","Nail Trimming");
    let pet3=new Pet("Lucky",20,"Mastiff","Vaccines");
    
    salon.pets.push(pet1,pet2,pet3,pet4);//add objects into salon array

}
window.onload=init;//waiting for the page to load