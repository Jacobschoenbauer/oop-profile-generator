function generateMarkdown(data) {
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
      <div class="name">${data.name}</div>
      <div class="job">Manger</div>
    </article>
    <div class="id">${data.id}</div>
    <div class="email">${data.email}</div>
    <div class="officenumber">${data.office}</div>
  </section>
  <section class="engineer" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${data.name}</div>
      <div class="job">Engineer</div>
    </article>
    <div class="id">${data.id}</div>
    <div class="email">${data.email}</div>
    <div class="github">${data.github}</div>
  </section>
  <section class="intern" style="width: 150px; height:150px; border-style: solid; margin:80px;">
    <article style="font-size: 20px; color: white; background-color: blue;">
      <div class="name">${data.name}</div>
      <div class="job">Intern</div>
    </article>
    <div class="id">${data.id}</div>
    <div class="email">${data.email}</div>
    <div class="school">${data.school}</div>
  </section>

</div>
  
  </body>
</html>

   
  `;
}

module.exports = generateMarkdown;
