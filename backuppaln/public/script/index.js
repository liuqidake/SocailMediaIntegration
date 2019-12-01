$('.continue').on("click", redditClick);

function redditClick(){
        $(".card-title").text("Sign In Twitter!");
        $('.icon').html("<i class='fab fa-twitter fa-6x'></i>");
        $('.icon').css("color","#00acee");
        var oldUrl = $(".confirm").attr("href"); // Get current url
        console.log(oldUrl)
        var newUrl = oldUrl.replace("/reddit_login", "/twitter_login"); 
        $(".confirm").attr("href", newUrl);
        $(".continue").off('click').on('click', twitterClick)
  
}

function twitterClick(){
        var oldUrl = $(".confirm").attr("href"); // Get current url
        console.log(oldUrl)
        var newUrl = oldUrl.replace("/reddit_login", "/home"); 
        $(".confirm").attr("href", newUrl);
        $(".continue").attr("href", "/home");
   
}