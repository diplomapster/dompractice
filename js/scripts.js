$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Oh hello there</li>")
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye esteemed colleague.</li>")
    $("ul#webpage").prepend("<li>Farewell Brendan</li>")
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Please, stop that</li>")
    $("ul#webpage").prepend("<li>Cut it out!</li>")
  });
});
