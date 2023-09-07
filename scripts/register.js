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
for(let i=0; i<salon.pets.lengths; i++){
    console.log(salon.pets[2].name);
}
