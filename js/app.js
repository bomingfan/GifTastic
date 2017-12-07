

// make a giphy api key and create variables
var apiKey = "cb29ZcymMTuZXtQxexw9GtY41MXTaXWH"
// var animals = [dogs, cats];





// onclick function ajax call and display the image 
// function getImage() {

// targeting button id=search  
$("#search").on("click", function (event) {

    //  Preventing the submit button from trying to submit the form
    event.preventDefault();

    // creating variables grabing user input and queryURL
    var animal = $("#userInput").val();
    console.log(animal);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + animal + "&limit=10&offset=0&lang=en";

    // clear out any previous images on the page when there is a new search happening
    $("#image").empty();

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {

            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                // display a list of gifs
                var newImg = $("<img>");
                newImg.attr("src", response.data[i].images.downsized_still.url);
                $("#image").append(newImg);
                
            }
        });
});
// }



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



