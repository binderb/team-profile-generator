const fs = require('fs');
const q = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

async function init () {
  console.log('--------------------------------------');
  console.log('Welcome to the Team Profile Generator!');
  console.log('--------------------------------------');
  const get_member = await prompt_pick_member_type();
}

/*------------------------------
Menu Logic
------------------------------*/

async function prompt_pick_member_type() {
  const data = await q.prompt([
    {
      type: 'list',
      message: 'Pick a team member to add:',
      choices: ['\x1b[31mManager\x1b[0m','\x1b[32mEngineer\x1b[0m','\x1b[35mIntern\x1b[0m','(Done)'],
      name: 'role'
    },
  ]);
  switch(data.role) {
    case '\x1b[31mManager\x1b[0m':
      await prompt_add_manager();
      break;
    case '\x1b[32mEngineer\x1b[0m':
      await prompt_add_engineer();
      break;
    case '\x1b[35mIntern\x1b[0m':
      await prompt_add_intern();
      break;
    default:
      await prompt_done();
  }
};

async function prompt_done () {
  if (team.length > 0) {
    console.log('Here is your team so far.');
    for (const teammate of team) {
      const spaces = '        '.slice(teammate.getRole().length-1);
      let text_color = '\x1b[0m';
      if (teammate.getRole() == 'Manager') text_color = '\x1b[31m'; 
      if (teammate.getRole() == 'Engineer') text_color = '\x1b[32m'; 
      if (teammate.getRole() == 'Intern') text_color = '\x1b[35m'; 
      console.log(`  \u00B7 ${text_color}${teammate.getRole()}\x1b[0m${spaces}- \x1b[33m${teammate.name}\x1b[0m`);
    }
    const data = await q.prompt([
      {
        type: 'confirm',
        message: 'Are you done entering your team info?',
        name: 'done'
      }
    ]);
    if (data.done) {
      await prompt_confirm_page();
    } else {
      await prompt_pick_member_type();
    }
  } else {
    await prompt_quit();
  }
}

async function prompt_quit() {
  if (team.length > 0) console.log('The data you entered will be lost if you quit now.');
  else console.log('You haven\'t added any team members.');
  const data = await q.prompt([
    {
      type: 'confirm',
      message: 'End program without making a profile page?',
      name: 'quit'
    }
  ]);
  if (data.quit) {
    console.log('Exiting program. Have a nice day!');
  } else {
    await prompt_pick_member_type();
  }
}

async function prompt_confirm_page() {
  const data = await q.prompt([
    {
      type: 'confirm',
      message: 'Generate profile page?',
      name: 'make'
    }
  ]);
  if (data.make) {
    generate_page();
  } else {
    await prompt_quit();
  }
}


/*------------------------------
Page Generation
------------------------------*/

function generate_page() {
  console.log('Generating page...');
  let template = fs.readFileSync('./src/page_template.html','utf8');
  const blocks = [];
  for (teammate of team) {
    switch (teammate.getRole()) {
      case 'Manager':
        let manager_block = fs.readFileSync('./src/manager_block.html','utf8');
        manager_block = manager_block.replace('manager_name',teammate.name);
        manager_block = manager_block.replace('manager_id',teammate.id);
        manager_block = manager_block.replace('manager_email',teammate.email);
        manager_block = manager_block.replace('manager_office',teammate.id);
        blocks.push(manager_block);
        break;
      default:
    }
  }
  template = template.replace('content_hook',blocks.join('\n'));

  fs.writeFile('./dist/index.html',template,(err) => {
    console.log(err ? err : 'Success!');
  });

}

/*------------------------------
Employee Adding Prompts
------------------------------*/

async function prompt_add_manager() {
  console.log('Let\'s add some info about this manager.');
  const data = await q.prompt([
    {
      type: 'input',
      message: 'Manager name:',
      name: 'name',
      validate: confirmInputNonEmptyString
    },
    {
      type: 'input',
      message: 'Employee ID#:',
      name: 'id',
      validate: confirmInputNumber
    },
    {
      type: 'input',
      message: 'Manager email:',
      name: 'email',
      validate: confirmInputEmail
    },
    {
      type: 'input',
      message: 'Office number:',
      name: 'office',
      validate: confirmInputNonEmptyString
    }
  ]);
  const new_manager = new Manager(data.name,data.id,data.email,data.office);
  team.push(new_manager);
  console.log(`Added new \x1b[31mmanager\x1b[0m \x1b[33m${new_manager.name}\x1b[0m to your team!`);
  await prompt_pick_member_type();
}

async function prompt_add_engineer() {
  console.log('Let\'s add some info about this engineer.');
  const data = await q.prompt([
    {
      type: 'input',
      message: 'Engineer name:',
      name: 'name',
      validate: confirmInputNonEmptyString
    },
    {
      type: 'input',
      message: 'Employee ID#:',
      name: 'id',
      validate: confirmInputNumber
    },
    {
      type: 'input',
      message: 'Engineer email:',
      name: 'email',
      validate: confirmInputEmail
    },
    {
      type: 'input',
      message: 'GitHub username:',
      name: 'github',
      validate: confirmInputNonEmptyString
    }
  ]);
  const new_engineer = new Engineer(data.name,data.id,data.email,data.github);
  team.push(new_engineer);
  console.log(`Added new \x1b[32mengineer\x1b[0m \x1b[33m${new_engineer.name}\x1b[0m to your team!`);
  await prompt_pick_member_type();
}

async function prompt_add_intern() {
  console.log('Let\'s add some info about this intern.');
  const data = await q.prompt([
    {
      type: 'input',
      message: 'Intern name:',
      name: 'name',
      validate: confirmInputNonEmptyString
    },
    {
      type: 'input',
      message: 'Employee ID#:',
      name: 'id',
      validate: confirmInputNumber
    },
    {
      type: 'input',
      message: 'Intern email:',
      name: 'email',
      validate: confirmInputEmail
    },
    {
      type: 'input',
      message: 'School:',
      name: 'school',
      validate: confirmInputNonEmptyString
    }
  ]);
  const new_intern = new Intern(data.name,data.id,data.email,data.school);
  team.push(new_intern);
  console.log(`Added new \x1b[35mintern\x1b[0m \x1b[33m${new_intern.name}\x1b[0m to your team!`);
  await prompt_pick_member_type();
}



/*------------------------------
Input Validation Functions
------------------------------*/

function confirmInputNonEmptyString (input) {
  if (input.trim() !== '') return true;
  else return 'You must provide an answer here.';
}

function confirmInputNumber (input) {
  if (!isNaN(parseInt(input)) && parseInt(input) > 0) return true;
  else return 'You must provide a positive integer value.';
}

function confirmInputEmail (input) {
  if (input.includes('@') 
  && input.includes('.') 
  && input.indexOf('@') < input.indexOf('.')
  && input.indexOf('.') < input.length-1) return true;
  else return 'You must provide a properly-formatted email address.';
}

// Start the program
init();