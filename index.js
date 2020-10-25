import bcrypt from 'bcryptjs';

const password = 'pleaseDontHackMe3248';
console.log('Raw Password: ', password);

bcrypt.hash(password, 8)
  .then(hashed => {
    console.log('Secure Password: ', hashed);

    // Must take the string version then the hashed version
    const doesMatch = bcrypt.compare(password, hashed);

    return doesMatch;
  }
  ).then(doesMatch => console.log('Password Matches: ', doesMatch));