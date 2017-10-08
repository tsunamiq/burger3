

//=============================================================
//  User form front end logic
//=============================================================


//=============================================================
// submit form collect user input
//=============================================================
$(document).ready(function(){
    $('.modal').modal();
    var user = {}
    $("#submit-form").on("click", function(event) {
        event.preventDefault();
        console.log("click test");

        user = {
            login_name: $("#login_name").val().trim(),
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            password: $("#password").val().trim(),
            age: $("#age").val().trim(),
            email: $("#email").val().trim(),
            height: $("#height").val().trim(),
            weight: $("#weight").val().trim(),
            lifestyle:$("input[name='group1']:checked").attr("id"),
            weight_to_lose: $("#weight_loss").val().trim(),
            weeks_to_lose: $("#how_long").val().trim(),
            gender:$("input[name='group2']:checked").attr("id")
        }

        $("#userlist").html("");
        $.each(user, function(key, value){
            var list = $("<li>").append(key + ": " +value);
            $("#userlist").append(list);

        })
        console.log(user); 
  
                    $.post("/api/user",user).done(function(response) {
                console.log("response from user creationg post:");
                console.log(response);
                console.log("===============")
                console.log("succesful user db update")
                localStorage.setItem("user_id", response.id);
                 window.location = "/main";
    });

    $(".modal-action").on("click",function(event){
        event.preventDefault();

        var confirm = $(this).attr("value");
        console.log("confirm value: "+ confirm);
        if(confirm == "true"){
            $.post("/api/user",user).done(function(response) {
                console.log("response from user creationg post:");
                console.log(response);
                console.log("===============")
                console.log("succesful user db update")
                localStorage.setItem("user_id", response.id);
                 window.location = "/main";
            });
        }else{
            console.log("user info incorrect. try again.")
        }
    })

});







