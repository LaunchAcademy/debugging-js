/*
# Learning Goals
- Debug JavaScript programs in the browser using Chrome Developer Tools
- Debug JavaScript programs at the command line using node debug
- Debug JavaScript programs at the command line using node --inspect --debug-brk
*/

let names = ['Sally', 'Jesse', 'John']

for(let i = 0; i < names.length; i++) {
  console.log(names[i])
}

if(names[1] === 'Jesse') {
  debugger;
}
