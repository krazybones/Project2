$(document).ready(function(){
    //tooltip settings
    $('[data-toggle="tooltip"]').tooltip();   

    //scrollspy addition attempt
    $('body').scrollspy({ target: '#scrollspy' });

    //ajax asynchronize call
    console.log("document ready...");
    $('#submit').click(function() {
        var url = "http://api.giphy.com/v1/gifs/search";
        var data = $('#myForm').serialize();
        console.log(data);
        $.ajax( {
            type: "GET",
            url: url,
            data: data,
            success: function(data) {
                console.log("received data");
                var output = "";
                $.each(data.data, function (key, obj) { 
                    //id, type, and url converted to variables
                    var id = obj.id;
                    var type = obj.type;
                    var imgSrc = "https://media2.giphy.com/media/"+obj.id+"/giphy."+obj.type; //feed url + id + type
                    output += "<div><img class='answer d-flex' src='"+imgSrc+"' /></div>\n" //create output and assign img tag for gifs
                });
                console.log(output);
                $("#scrollspy").html(output); //get output
            }
        });
    });
});




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

