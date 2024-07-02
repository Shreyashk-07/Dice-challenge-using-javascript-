function diceGame()
{
    var player1=Math.floor(Math.random()*6)+1;
    var player2=Math.floor(Math.random()*6)+1;

        var imageContainer1 = document.getElementById("player1-result");
       imageContainer1.innerHTML="<img src='./images/"+player1+".png'>"
        // if (player1 == 1) imageContainer1.innerHTML = '<img src="./images/1.png">';
        // else if (player1 == 2) imageContainer1.innerHTML = '<img src="./images/2.png">';
        // else if (player1 == 3) imageContainer1.innerHTML = '<img src="./images/3.png">';
        // else if (player1 == 4) imageContainer1.innerHTML = '<img src="./images/4.png">';
        // else if (player1 == 5) imageContainer1.innerHTML = '<img src="./images/5.png">';
        // else  imageContainer1.innerHTML = '<img src="./images/6.png">';

        var imageContainer2 = document.getElementById("player2-result");
        imageContainer2.innerHTML="<img src='./images/"+player2+".png'>"
        // if (player2 == 1) imageContainer2.innerHTML = '<img src="./images/1.png">';
        // else if (player2 == 2) imageContainer2.innerHTML = '<img src="./images/2.png">';
        // else if (player2 == 3) imageContainer2.innerHTML = '<img src="./images/3.png">';
        // else if (player2 == 4) imageContainer2.innerHTML = '<img src="./images/4.png">';
        // else if (player2 == 5) imageContainer2.innerHTML = '<img src="./images/5.png">';
        // else  imageContainer2.innerHTML = '<img src="./images/6.png">';
           var resultContainer = document.getElementById("result");
    resultContainer.style.visibility = "visible";
    if(player1==player2)
        {
           
            resultContainer.innerHTML="Draw";
        }
    else if(player1>player2)
        {
           
            resultContainer.innerHTML="Player 1 beats player 2";      
        }
    else
    {
       
            resultContainer.innerHTML="Player 2 beats player 1";
    }
  
}