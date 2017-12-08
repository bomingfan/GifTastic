

// make a giphy api key and create variables
var apiKey = "cb29ZcymMTuZXtQxexw9GtY41MXTaXWH"


// create ajax call function to pull/show images
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
                 // adding new attribute for later use 
                 newImg.attr("src", response.data[i].images.fixed_height_still.url);
                 newImg.attr("data-still", response.data[i].images.fixed_height_still.url);
                 newImg.attr("data-animate", response.data[i].images.fixed_height.url);
                 newImg.attr("data-state", "still");
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
// targeting button by jqery won't work for the new buttons, has to scan the whole document
// also needs the anonmous function for the showImage function because it includes a parameter. 

$(document).on("click", "button", function(event) {
  showImage($(this).attr("data-animal"));
});


// on click - animate gifs, second click, stop animate
$(document).on("click", "img", function(event) {

    // set variables state and grab the data-state attribute
    var state = $(this).attr("data-state");
    
    // if state is still
    if (state === "still") {
    var animate = $(this).attr("data-animate");

    // set src to animate url and change the state to animate
    $(this).attr("src", animate);
    $(this).attr("data-state", "animate");
    }
    else {
    // otherwise (if state === anmiate)
    var still = $(this).attr("data-still");
    // set src to still url
    $(this).attr("src", still);
    $(this).attr("data-state", "still");
    
    }

  });


