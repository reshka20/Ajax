$(document).ready(function(){
    $("#html").click(function(){
      $("#q1").load("txt/html.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("Melumat Yuklenir");
        if(statusTxt == "error")
          alert("Melumat Yuklenmedi: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });


  $(document).ready(function(){
    $("#css").click(function(){
      $("#q1").load("txt/css.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("Melumat Yuklenir");
        if(statusTxt == "error")
          alert("Melumat Yuklenmedi: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });
  
  $(document).ready(function(){
    $("#js").click(function(){
      $("#q1").load("txt/js.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("Melumat Yuklenir");
        if(statusTxt == "error")
          alert("Melumat Yuklenmedi: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });
  $(document).ready(function(){
    $("#php").click(function(){
      $("#q1").load("txt/php.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("Melumat Yuklenir");
        if(statusTxt == "error")
          alert("Melumat Yuklenmedi: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });
  $(document).ready(function(){
    $("#python").click(function(){
      $("#q1").load("txt/python.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("Melumat Yuklenir");
        if(statusTxt == "error")
          alert("Melumat Yuklenmedi: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });