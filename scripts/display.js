function displayCards(){
    let tmp="";
    //travel the pets array **for
    for(var i = 0; i < pets.length; i++){
        let pet = salon.pets[i];
        
        //create the tmp string ** <div>${}</div>` +
        var tmp = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${pet.image}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text">${pet.breed}</p>
        <p class="card-text">${pet.age}</p>
        <p class="card-text">${pet.gender}</p>
        <p class="card-text">${pet.service}</p>
        <p class="card-text">${pet.type}</p>
        </div>
    </div>`;
    }
    //insert into the HTML ** innerHTML
    document.getElementById("pets").innerHTML = tmp;
    }
function displayTable(){
    let tr="";
    //travel the pets array **for
    for(let i = 0; i < salon.pets.length; i++){
        let pet=salon.pets[i];
        tr+=
        `<tr>
        <td>${pet.name}</td>
        <td>${pet.breed}</td>
        <td>${pet.age}</td>
        <td>${pet.service}</td>
        </tr>`;
    
}

        //create the tmp string ** <div>${}</div>` +
        
    //insert into the HTML ** innerHTML
    document.getElementById("pettable").innerHTML=tr;
    }


