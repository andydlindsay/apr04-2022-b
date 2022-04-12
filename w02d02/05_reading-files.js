const fs = require('fs');
// console.log(fs);

const contents = fs.readFileSync('./input.html', { encoding: 'utf-8' });
// const contents = fs.readFileSync('./input.html');
console.log(contents.length);
// console.log(typeof contents);

fs.readFile('./input.html', { encoding: 'utf-8' }, (err, contents) => {
  if (err) {
    return console.log('err', err);

    // cb('bad stuff happened')
  }

  console.log(contents.length);
});

console.log('end of the file');

// setTimeout(() => {
//   fs.readFileSync()
// }, 2000);
