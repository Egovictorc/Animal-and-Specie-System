$(document).ready(function() {
    // FORM POST
    // lat div = "";

    // <div class="specie__div" >
    //           <h3 class="family__name">Amphibians</h3>
    //           <div class="specie__img-cont" id="amph-1">
    //             <img src="images/giraffe.jpg" alt="" class="specie__img" />
    //           </div>
    //           <p class="specie__desc">
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
    //             veritatis, eligendi ut quisquam facilis dicta, nam maxime
    //             placeat, cumque aspernatur neque quis magnam officiis id
    //             doloremque! Numquam blanditiis velit labore?
    //           </p>
    //         </div>


    $.getJSON("http://localhost:3000/animals", function(data){
    let amphibians = '';
    let reptiles = '';

        $.each(data, function(index, value){
            if( value.specieName === "amphibian"){
        amphibians+= `<div class='specie__div'> `
        amphibians+=  `<h3 class="family__name heading"> ${value.specieName} </h3>`
        amphibians+= `<div class="specie__img-cont" >`
        amphibians+= `<img src=${value.url} alt=${value.animalName} class="specie__img" />`
        amphibians+=  "</div>"
        amphibians+= `<p class="specie__desc">${value.description}</p>`
        amphibians+= `</div>`
        } 
        else {
        reptiles+= `<div class='specie__div'> `
        reptiles+=  `<h3 class="family__name heading"> ${value.specieName} </h3>`
        reptiles+= `<div class="specie__img-cont" >`
        reptiles+= `<img src=${value.url} alt=${value.animalName} class="specie__img" />`
        reptiles+=  "</div>"
        reptiles+= `<p class="specie__desc">${value.description}</p>`
        reptiles+= `</div>`
            }
        })
        // $("#reptiles").append(reptiles)
        $("#amphibians").append(amphibians)
    } )


  let admin = {
    email: $("input#email").val(),
    password: $("input#password").val()
  };

    // ADD ANIMALS
  // $("#signup").on("click", function(e) {
  $("#addbtn").submit(function(e) {
    e.preventDefault();
    let error = {};
    let errorCount = 0;
    let newAnimal = {
        specieName: $("input#specie-name").val(),
        familyName: $("input#family-name").val(),
        animalName: $("input#animal").val(),
        description: $("input#description").val(),
        url: $("input#url").val(),
      }
    for( let [key, value] of Object.entries(newAnimal) ){
        if (value === ""){
            error[key] = "empty field";
            errorCount = errorCount + 1;
        }
    }
    // ADD ANIMALS TO DATABASE 
    // if(errorCount === 0) {
        $.post( "http://localhost:3000/animals", newAnimal, function(data, obj, success) {
        window.location.href = "../pages/admin.html"
        alert(JSON.stringify(success));
        // GET ANIMAL FROM 
      })
    // } else {
    //     alert("Please fill all input fields")
    // }
    
    });
    // DELETE ANIMALS
})
   

