function generateMarkdown(team) {
  return ` 
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Adventure</title>
  </head>
  <body>
  <h1 style=" align-items: center; height: 80px; width: 100%; justify-content: center; display:flex; color: white;  background-color:red;">My Team</h1>
  <div class="group" style="justify-content: center; display:flex ;">
  ${team.map((member) => member.getHtml()).join("")}
  
  </body>
</html>

   
  `;
}

module.exports = generateMarkdown;
