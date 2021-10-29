
        function myFunction() { 
            var x = document.getElementById("demo");
            if (x.style.display === "block") {
                x.style.display = "none";
    
            }   else{
                x.style.display="block";
            } 
            }
          


          $(document).ready(function(){
            $("#link1").click(function(){
              $("#demo").hide();
              $(".Formdiv").show();
            
              });

            $("#glyphicon").click(function(){
              $(".Formdiv").hide();
              $("#demo").show();
            
            });

            $("#link2").click(function(){
              $("#demo").hide();
              $(".Formdiv").show();
          });
          $("#link3").click(function(){
            $("#demo").hide();
            $(".Formdiv").show();
          });
          $("#btn1").dblclick(function(){
            $(".Formdiv").hide();
          });
        });

      
        