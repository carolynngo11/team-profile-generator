const inquirer = require('inquirer');
const fs = require('fs');

// const manager = require("./test/manager");
// const engineer = require("./test/engineer");
// const intern = require("./test/intern");

inquirer
  .prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Enter team manager name.",
    },
    {
        type: 'input',
        name: 'Role',
        message: "Enter team member role.",
    },
  ])
  .then((response) => {
    console.log(response)
    fs.writeFile('index.html', generateHtml(response), function(err){
        if (err) {
            console.log(err);
        }else{
            console.log('Successfully added HTML file!');
        }
    })
  })

  function generateHtml({Name, Role, Id, Email, Office}){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>Document</title>
      </head>
      <body>
          
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${Name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${Role}</h6>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Id}</li>
            <li class="list-group-item">Email: ${Email}</li>
            <li class="list-group-item">Office Number" ${Office}</li>
          </ul>
        </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
      </body>
      </html>
`
}