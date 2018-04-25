$( document ).ready(function() {
    console.log( "ready!" );
    loadData();
});

function loadData() {
    $.ajax({url: "http://dev.bio.com/api/getprofile", success: function(result){
        console.log
        console.log(result);
    }});
}