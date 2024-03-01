const fs = require("fs");

const generateManager = (manager) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h2><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h2>
    </div>
    <div class="card-body-container">
        <div class="card-body">
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
    </div>`
}


const generateEngineer = (engineer) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h2><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h2>
    </div>
    <div class="card-body-container">
        <div class="card-body">
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: <a href="http://${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
        </div>
    </div>
</div>`
}


const generateIntern = (intern) => {
    return `
    <div class="card">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h2><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h2>
    </div>
    <div class="card-body-container">
        <div class="card-body">
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>
</div>`
}



const buildTeam = function(team) {
    
    let managerArr = [];
    let engineerArr = [];
    let internArr = [];

    team.forEach(member => {
        let role = member.getRole();

        if (role === "Manager") {
            managerArr.push(member);
        } else if (role === "Engineer") {
            engineerArr.push(member);
        } else {
            internArr.push(member);
        }
    });

    let managerHtml = generateManager(managerArr[0]);
    let engineerHtml = "";
    let internHtml = "";
    

    engineerArr.forEach(member => {
        engineerHtml += generateEngineer(member);
    });

    internArr.forEach(member => {
        internHtml += generateIntern(member);
    }); 
    
    let html = managerHtml + engineerHtml + internHtml;
    createPage(html);
};


const createPage = function(teamHtml) {

    const page = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    
    <body>

        <header class="main-header">
            <h1>My Team</h1>
        </header>
    
        <section class="main-section">
            ${teamHtml}
        </section>
    
    </body>
    
    </html>`
   
    fs.writeFile("./dist/index.html", page, (error) => {

        if (error) {
            throw error;
        }  
        
        console.log('Html file created successfully');
    })
};


module.exports = buildTeam;