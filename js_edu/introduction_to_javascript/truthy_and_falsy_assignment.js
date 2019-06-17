/*if (username) {
  defaultName = username;
  console.log(`Hi, ${username}!`);
} else {
  defaultName = 'Stranger';
  console.log(`Hi, ${defaultName}!`);
}*/

/*let username ='';
let defaultName = username || 'Stranger';
console.log(`Hi, ${defaultName}!`);*/
let username = '';
username ? console.log(`Hi, ${username}!`) : console.log(`Hi, ${defaultName}!`);

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);