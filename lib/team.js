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
    {
        type: 'input',
        name: 'Email',
        message: "Enter team member's Email.",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "Enter team member's GitHub.",
    }
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

  function generateHtml({Name, Role, Id, Email, Office, GitHub}){
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

    <header style="block-size: 150px;
                    margin-bottom: 80px;
                    padding-top: 45px;
                    text-align: center;
                    color: white;
                    background-color: rgb(235, 77, 98);">
        <h1>My Team</h1>
    </header>

        <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary" style= "border-radius: 5px; box-shadow: 5px 5px 10px 2px rgba(119, 119, 119, 0.8);">
        <h5 class="card-title text-white" style="font-size: x-large;">${Name}</h5>
            <h6 class="card-subtitle mb-2 text-white">${Role}</h6>
            <br>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Id}</li>
            <li class="list-group-item">Email: <a href="URL PLACEHOLDER">${GitHub}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${GitHub}">${GitHub}</a></li>
            <li class="list-group-item">Office Number: ${Office}</li>
          </ul>
        </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
      
    </body>
      </html>
`
}