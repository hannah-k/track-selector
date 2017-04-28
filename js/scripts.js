$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();

    // collect the input
    var name = $("#name").val();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());

    // declare new variables to equal the corresponding modal

    var track = question1 + question2 + question3;
    var trackDescription;


    if (track <= 10) {
      track = "CSS/Design!";
      trackDescription = "get to study design stuff";
    } else if (track >= 10 && track <= 21) {
      track = "PHP and Drupal"
      trackDescription = "can work for the government or restaurants";
    } else if (track >= 22) {
      track = "Ruby"
      trackDescription = "can work for cool startups and write elegant, simple code";
    } else {
      alert("Maybe you should just be a vet instead...")
    }

    // show match modal
    // btn.onclick = function() {

    $(".user-name").text(name);
    $(".which-track").text(track);
    $(".track-description").text(trackDescription);
  })
})
