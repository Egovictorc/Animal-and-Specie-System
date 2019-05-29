// $(document).ready(function(){
    // $("[type=submit]").click(function(e){
    //     // e.preventDefault();
    //     alert(`yeap `)
    //     let id =  $(this.id );
    //     if( id === "") {
    //     fetch("local"){}
    // }
    // })
    // FORM SUBMIT
//     $("form").submit(function(event){
//         // $("[type=submit]").click( function(e){
//         event.preventDefault();
        
//         let addAdmin = { 
//             firstName: $("input#first-name").val(),
//             lastName: $("input#last-name").val(),
//             email: $("input#email").val(),
//             password: $("input#password").val(),
//             phoneNumber: $("input#phone").val(),
//         },
//         valueArray = [],
//         error = {},
//         errorCount = 0;
//         for ( let [key, val] of Object.entries(addAdmin) ) {
//             if( $.trim( val )  === ""){
//                 error[key] = key + ` must not be empty`;
//             } else {
//                 errorCount++;
//             }
//         }
           
//         if(errorCount !== 0) {
//             // alert (JSON.stringify(error) )
//             fetch("http://localhost:3000/admin", {
//                 method: 'POST',
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 // redirect: 'manual',
//                 body: JSON.stringify(addAdmin)
//             })
//             // return false;   
//             .then( ( response )=> {
//                 alert( `success` ); 
//                 addAdmin = {};
//                 errorCount = 0;
//                 return false;   
//             });
//         } else {
//             alert (JSON.stringify(error) )
//         }
//         return false;    
//     })
// })
 
$( document ).ready(function(){

    let addAdmin = { 
        firstName: $("input#first-name").val(),
        lastName: $("input#last-name").val(),
        email: $("input#email").val(),
        password: $("input#password").val(),
        phoneNumber: $("input#phone").val(),
    };

    $("form").submit( function(e){

        // e.preventDefault();
        $.post( "http://localhost:3000/admin", addAdmin, function(data, obj, success){
                alert(JSON.stringify(success))
            },
            "json"
        )
        // return false;
        // .done ( ()=> alert(`done`))
        // .fail( ()=> alert(`fail`) )
        // alert("Thank you for your comment")
    })
})

