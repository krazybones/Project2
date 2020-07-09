$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//scrollspy addition attempt
$(document).ready(function() {
    $('body').scrollspy({ target: '#scrollspy' });
});

$(document).ready(function() {
    console.log("document ready...");
    $('#submit').click(function() {
        console.log("submit clicked");
        $('#outputArea').html("submit clicked");
    });
});



//after checking buttong for functionality
//replace below code into line 10:

//var url = "http://api.giphy.com/v1/gifs/search";
//var data = $('#myForm').serialize();
//console.log(data)
//$.ajax( {
    //type: "GET",
    //url: url,
    //data: data,
    //success: function() {
        //console.log("received data");
   // };
//});

//$(document).ready(function(){
    //$('#submit').click(function () { 
        ///=let userInput = $('#search').val()
        //alert(userInput);
        //$.ajax({
           // url: "http://api.giphy.com/v1/gifs/search?q=martin+lawrence&api_key=4dfI4W9QgUypon3fgxvDqTy7j0Q8hk1w&limit=50",
       // })
            //.done((res)=>{
                //let gifs = res.Search;
               // $.each(gifs, function (i, e) { 
                    //let images = e.images
                    //console.log("images", images)
                    //$("body").append(`<img src="${images}" alt="gif"/>`)
               // });
                //console.log("res", res.Search)
           // })
   // });
//});

