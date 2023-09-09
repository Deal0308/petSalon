//object literal
let salon = {
    name: "The Fashion Pet",
    phone: "555-555-5555",
    address: {
        street: "12 & imperial",
        zip: "123",
        number: "12345"
    },
    pets:[
        {
            name: "Scooby",
            age: 60,
            breed: "Labrador Retriever",
            service:"Grooming"
        },
        {
            name: "Boss",
            age: 10,
            breed: "Doberman",
            service:"Vaccines"
        },
        {
            name: "Speedy",
            age: 10,
            breed: "Greyhound",
            service:"Nail cutting"
        }
    ]
}
function displayPets() {
    let petNames = '';
    for (let i = 0; i < pets.length; i++) {
        petNames += pets[i].name + '<br>';
    }

    document.getElementById('petNames').innerHTML = petNames;
    document.getElementById('petCount').innerHTML = 'Number of pets: ' + pets.length;
}

window.onload = displayPets;