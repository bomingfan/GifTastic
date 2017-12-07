

// make a giphy api key and create variables
var apiKey = "cb29ZcymMTuZXtQxexw9GtY41MXTaXWH"
// var animals = [dogs, cats];

function showImage(keyWord) {
    // creating variables grabing user input and queryURL
    // animal = $("#userInput").val();
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + keyWord + "&limit=10&offset=0&lang=en";
 
     // clear out any previous images on the page when there is a new search happening
     $("#image").empty();
 
     $.ajax({ url: queryURL, method: 'GET' })
         .done(function (response) {
 
             console.log(response);
             for (var i = 0; i < response.data.length; i++) {
                 // display a list of gifs
                 var newImg = $("<img>");
                 newImg.attr("src", response.data[i].images.fixed_height_still.url);
                 $("#image").append(newImg);
                 
             }
         });
}

// make a new button for them to click on later
   function makeButton(input) {
    var newBtn = $("<button>");
    newBtn.attr("type", "button");
    newBtn.addClass("btn btn-primary");
    newBtn.text(input);
    newBtn.attr("data-animal", input);
    $('#addButton').append(newBtn);
  }


// targeting button id=search  
$("#search").on("click", function (event) {
    //  Preventing the submit button from trying to submit the form
    event.preventDefault();
    var animal = $("#userInput").val();
    showImage(animal);
    makeButton(animal);
});


// targeting generated button
// $("button").on("click", function () {  
//     var dataAnimal = $(this).attr("data-animal");
//     console.log(dataAnimal);
//     showImage(dataAnimal);
// });


$(document).on("click", "button", function(event) {
  showImage($(this).attr("data-animal"));
});

// finds giphy results based on text
// from the user input 
// function getGiphies(userInput) {

    // if I do not have data-giphy use userInput
    // var input = $(this).attr("data-giphy") || userInput;





// }

// make form to add new buttons

// create variables arrays

// create an ajax call

// disect the object (title, rating, images)

// display them to user

// on click - animate gifs, second click, stop animate



