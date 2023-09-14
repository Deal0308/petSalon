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
function Pet(name,age,breed,service,type){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.service = service;
    this.type = type;
}   
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");
const inputType = document.getElementById("txtType");

function isValid(aPet){
    let validation = true;//assuming everything is valid
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputType.classList.remove("alert-error");
    if(aPet.name == ""){
        validation = false;
        inputName.classList.add("alert-error");
    }
    if(aPet.service == ""){
        validation = false;
        inputService.classList.add("alert-error");
    }
    return validation;
}
//buttons
const btnRegister = document.getElementById("btnRegister");
btn
btnRegister.addEventListener("click",register);


function register(){
    //get the values from the form
    console.log(inputName.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value,inputType.value);
    if (isValid(newPet)==true){
        salon.pets.push(newPet);
        displayCards();
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

    
    salon.pets.push(pet1,pet2,pet3);//add objects into salon array
    displayCards()



    console.log(salon.pets);
    let html = "";



}
window.onload=init;//waiting for the page to load
