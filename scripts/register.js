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
let x=0;

//constructor
function Pet(name,age,breed,service,type,payment,phone,){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.payment = payment;
    this.phone = phone;
    this.id=x++;
}   
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputType = document.getElementById("txtType");
const inputService = document.getElementById("txtService");
const inputPayment = document.getElementById("txtPayment");
const inputPhone = document.getElementById("txtPhone");


function isValid(aPet){
    let validation = true;//assuming everything is valid
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputType.classList.remove("alert-error");
    inputPayment.classList.remove("alert-error");
    inputPhone.classList.remove("alert-error");
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






function register(){
    //get the values from the form
    console.log(inputName.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value,inputType.value,inputPayment.value,inputPhone.value);
    if (isValid(newPet)==true){
        salon.pets.push(newPet);
        displayTable();
        clearInputs();
        


    }
    

}
function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputBreed.value = "";
    inputType.value = "";
    inputService.value = "";
    inputPayment.value = "";
    inputPhone.value = "";
    

}
function deletePet(petID){
    let deleteIndex;
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(petID==pet.id){
        deleteIndex = i;//position of the pet
        }
    }
    salon.pets.splice(deleteIndex,1);//delete the pet from the array
document.getElementById(petID).remove();

}
function search(){
    let inputSearch = document.getElementById("txtSearch").value;
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(inputSearch.toLowerCase()==pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("alert-search");
        }else{
            document.getElementById(pet.id).classList.remove("alert-error");
        }
    
    }
}
function init(){
    
    let pet1 =new Pet("Scooby",60,"Dane","Grooming","Dog","Cash",555-555-5555);
    let pet2=new Pet("Buddy",30,"Calico","Nail Trimming","Cat","Cash",555-555-5555);
    let pet3=new Pet("Lucky",20,"Mastiff","Vaccines","Dog","Cash",555-555-5555);

    
    salon.pets.push(pet1,pet2,pet3);//add objects into salon array
    displayTable();




    console.log(salon.pets);
    let html = "";



}
window.onload=init;//waiting for the page to load
