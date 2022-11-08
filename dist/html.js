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
  <section class="manger" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${team[0].name}</div>
      <div class="job">Manger</div>
    </article>
    <div class="id">${team[0].id}</div>
    <div class="email"><a href="${team[0].email}">${team[0].email}<a></div>
    <div class="officenumber">${team[0].officeNumber}</div>
  </section>
  <section class="engineer" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${team[1].name}</div>
      <div class="job">Engineer</div>
    </article>
    <div class="id">${team[1].id}</div>
    
    <div class="email"><a href="${team[1].email}">${team[1].email}<a></div>
    <div class="github"><a href="${team[1].github}">${team[1].github}<a></div>
  </section>
  <section class="intern" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${team[2].name}</div>
      <div class="job">Intern</div>
    </article>
    <div class="id">${team[2].id}</div>
    <div class="email"><a href="${team[2].email}">${team[2].email}<a></div>
    <div class="school">${team[2].school}</div>
  </section>

</div>
  
  </body>
</html>

   
  `;
}

module.exports = generateMarkdown;
