
function displayTable(){
    let tr="";
    //travel the pets array **for
    for(let i = 0; i < salon.pets.length; i++){
        let pet=salon.pets[i];
        tr+=
        `<tr id="${pet.id}">
        <td>${pet.name}</td>
        <td>${pet.breed}</td>
        <td>${pet.age}</td>
        <td>${pet.type}</td>
        <td>${pet.service}</td>
        <td>${pet.payment}</td>
        <td>
        <button onclick="deletePet(${pet.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
        </tr>`;
    
}

        //create the tmp string ** <div>${}</div>` +

        
    //insert into the HTML ** innerHTML
    document.getElementById("petTable").innerHTML=tr;
    }

    //add the phone number input on the HTML **



    //add the phone number attribute on the constructor **


    //clear the phone number input on the HTML **

    //add phone number property to the three pets we have

    //display the phone number input on the HTML **

