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
      choices: ['Manager','Engineer','Intern','<cancel>'],
      name: 'role'
    },
  ]);
  switch(data.role) {
    case 'Manager':
      await prompt_add_manager();
      break;
    default:
      await prompt_cancel();
  }
};

async function prompt_cancel () {
  console.log('Here is your team so far.');
  for (const teammate of team) {
    console.log(`${teammate.getRole()} - ${teammate.name}`);
  }
  const data = await q.prompt([
    {
      type: 'confirm',
      message: 'Are you done entering your team info?',
      name: 'done'
    }
  ]);
  if (data.done) {
    console.log('finished!');
  } else {
    await prompt_pick_member_type();
  }
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
  console.log(`Added new manager ${new_manager.name} to your team!`);
  await prompt_pick_member_type();
}



/*------------------------------
Input Validation Functions
------------------------------*/

function confirmInputNonEmptyString (input) {
  return true;
}

function confirmInputNumber (input) {
  return true;
}

function confirmInputEmail (input) {
  return true;
}

// Start the program
init();