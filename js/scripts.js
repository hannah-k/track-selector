$(document).ready(function(){
  $("#track-quiz").submit(function(event){
    event.preventDefault();

    // collect the input
    var name = $("#name").val();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());

    // declare new variables to equal the corresponding modal

    var track = question1 + question2 + question3;

    if (track <= 5) {
      track = "CSS/Design!"
    } else if (track >= 10 && track <= 21) {
      track = "PHP and Drupal"
    } else if (track >= 22) {
      track = "Ruby"
    }

    // show match modal
    $("results").show();
    $(".user-name").text(name);
    $(".which-one").text(track);
  })
})
