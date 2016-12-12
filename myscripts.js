$(document).ready(function(){
  $(".btn").on("click", function(){
  $.getJSON("http://quotes.stormconsultancy.co.uk/quotes.json", function (json) {
    
    var html = "";
    var len = json.length;
    var index = Math.floor(Math.random() * len);
    var val = json[index];
     
      html += "<div class = 'newQuote'>";
      
      html += "<h3>'" + val.quote + "'</h3>";
          
        
      html += "</div>";
    $(".author").text(val.author);
    
    $(".text").html(html);
    
  
    
  $('#tweet-quote').unbind("click");
  $('#tweet-quote').on("click",function(){
   window.open("https://twitter.com/intent/tweet?text="+
  val.quote + val.author + encodeURIComponent(' #myfavoritequote')  );return false;
 
 });
     });
    });
    
  });
   


	

