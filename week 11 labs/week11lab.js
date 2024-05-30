<!-- 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JQuery and AJAX Lab
  FE Lab Week 11
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JQuery and AJAX</title>

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1>Week 11 Lab: JQuery and AJAX</h1>

    <hr />
    <!---------------QUESTION 1---------------->

    <h2>Question 1:</h2>
    <div class="put-here">Text to be replaced...</div>

    <input id="input-value" type="text" placeholder="put a name here" />
    <button onclick="replaceTextInDiv()">Replace</button>

    <hr />
    <!--------------QUESTION 2----------------->

    <h2>Question 2:</h2>
    <div class="dog">
      <img src="images/dog.png" alt="dog clipart" width="200" />
    </div>

    <hr />
    <!--------------QUESTION 3----------------->

    <h2>Question 3:</h2>
    <div>
      <p id="lorem1">
        <b>Lorem 1</b> ipsum dolor, sit amet consectetur adipisicing elit. Magni
        voluptas, obcaecati quia sint eligendi reiciendis blanditiis quam alias,
        ex nesciunt ab, totam ipsam accusamus quidem distinctio itaque amet
        rerum. <b>DIV ONE</b>.
      </p>

      <p id="lorem2">
        <b>Lorem 2</b> ipsum dolor, sit amet consectetur adipisicing elit. Magni
        voluptas, obcaecati quia sint eligendi reiciendis blanditiis quam alias,
        ex nesciunt ab, totam ipsam accusamus quidem distinctio itaque amet
        rerum. <b>DIV TWO</b>.
      </p>

      <p id="lorem3">
        <b>Lorem 3</b> ipsum dolor, sit amet consectetur adipisicing elit. Magni
        voluptas, obcaecati quia sint eligendi reiciendis blanditiis quam alias,
        ex nesciunt ab, totam ipsam accusamus quidem distinctio itaque amet
        rerum. <b>DIV THREE</b>.
      </p>
    </div>

    <hr />
    <!---------------QUESTION 4---------------->

    <h2>Question 4:</h2>

    <div class="box">
      <h3>Cat Facts:</h3>

      <div class="cat-facts"></div>
    </div>

    <div class="box">
      <h3>Jokes: Have you heard this one?</h3>

      <div class="jokes"></div>
    </div>

    <hr />
    <!--------------QUESTION 5----------------->

    <h2>Question 5:</h2>

    <div class="result"></div>

    <div class="new"></div>

    <hr />
    <!--------------QUESTION 6----------------->

    <h2>Question 6:</h2>
    <p>Click button to post a student to the gradebook.</p>
    <form onsubmit="event.preventDefault();">
      <label for="text">First Name</label>
      <input id="firstname" type="text" />
      <br />
      <label for="lastname"> Last Name </label>
      <input id="lastname" type="text" />
      <br />
      <label for="grade">Grade % (0 - 100)</label>
      <input id="grade" type="number" min="0" max="100" />
    </form>

    <button class="test">TEST</button>

    <button class="postBtn">POST</button>

    <hr />
    <!--------------------------------------->
    <footer>Promineo Tech ©️2023</footer>

    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="week11Lab.js"></script>
  </body>
</html>