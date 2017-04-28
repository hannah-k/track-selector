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
    var trackPhoto

    if (track <= 10) {
      track = "CSS/Design!";
      trackDescription = "in it you get to conceptualize, plan, and build a collection of electronic files that determine the layout, colors, text styles, structure, graphics, images, and use interactive features that deliver pages to your site visitors. Web Design is a crucial component in web development, and students who learn design will be able to engineer positive and interactive user experiences through innovative interfaces. ";
      var trackPhoto = "'img/css.png'";
    } else if (track >= 10 && track <= 21) {
      track = "PHP and Drupal"
      trackDescription = "you can use it to make content-heavy websites with relatively little user interaction. The most popular content management systems - Wordpress, Drupal, and Joomla - are all written in PHP, and everything from local restaurants' websites up through large complex government deployments are built with these tools. If you're keen to work for an agency that builds websites for clients, or if you like the idea of building out sites for brands, businesses, and organizations, PHP is a great direction to go.";
      var trackPhoto = "'img/php.png'";
    } else if (track >= 22) {
      track = "Ruby"
      trackDescription = "it is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly.";
      var trackPhoto = "'img/ruby.png'";
    } else {
      alert("Maybe you should just be a vet instead...")
    }

    // show match modal
    // btn.onclick = function() {

    $(".user-name").text(name);
    $(".which-track").text(track);
    $(".track-description").text(trackDescription);
    $(".track-photo").html('<img class ="img-responsive" src =' + trackPhoto + '>' );
  })
})
