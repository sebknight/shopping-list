console.log("script loaded");
$.ajax({
    url: "http://192.168.33.10:3000/shopping-list",
    type: "GET",
    dataType: "json",
    success: function (items) {
        console.log(items);
        $("#shopping-list-display").text(items);
    },
    error: function (error) {
        console.log("error");
        console.log(error);
    }
});


function formHandler(){
    event.preventDefault();
    const data = {};
    console.log(JSON.stringify(data, null, " "));
    
};

$("#add-item-button").click(function (e) {
    formHandler();
});
