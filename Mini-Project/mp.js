function startTimer() 
{
    document.getElementById("beepAudio").src = "http://soundbible.com/grab.php?id=2210&type=mp3";
    document.getElementById("beepAudio").load();
    userInput = document.getElementById('userTime').value;
    if(userInput.length == 0)
    {
          alert("Please enter a value");
    } 
    else 
    {
      var numericExpression = /^[0-9]+$/;
      if(!userInput.match(numericExpression))
      {
        alert("Please enter a number")
      } 
      else 
      {
        function display( notifier, str ) 
        {
            document.getElementById(notifier).innerHTML = str;
        }
          
        function toMinuteAndSecond( x ) 
        {
            return Math.floor(x/60) + ":" + x%60;
        }
          
        function setTimer( remain, actions ) 
        {
            (function countdown() 
            {
                display("countdown", toMinuteAndSecond(remain));         
                actions[remain] && actions[remain]();
                (remain -= 1) >= 0 && setTimeout(arguments.callee, 1000);
            })();
        }
  
        setTimer(userInput, 
        {
            0: function () 
            {  
                document.getElementById("beepAudio").play();   
                   
            }
        }); 
      }  
    }
  }

  