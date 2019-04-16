$("#two").hide();
$("#three").hide();
$("#four").hide();
$("#five").hide();

$("#B").click(function() {
    $("#one").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kIh5dWBqyezv8EUoR_Aw_zICQN5dkpTLjmgCwSTz7OJ9Idr1");
    $("#A").hide();
    $("#B").text("It was died,so sad.");
});
$("#A").click(function() {
    $("#one").hide();
    $("#two").show();
    $("#B").hide();
    $("#A").text("Oh, it cahnge be cocoon.(click the picture)");
});
$("#two").click(function() {
    $("#one").hide();
     $("#two").hide();
    $("#three").show();
      $("#A").text("Wow, it being a butterfly!(click the picture again)");
});
$("#three").click(function() {
    $("#one").hide();
    $("#two").hide();
     $("#three").hide();
    $("#four").show();
      $("#A").text("It has babies now.");
});
$("#four").click(function() {
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
     $("#four").hide();
    $("#five").show();
      $("#A").text("This is the new caterpillar, in the future, it will cahnge to be the butterfly.");
});