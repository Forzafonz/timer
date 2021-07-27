const input = process.argv.splice(2).sort((a, b) => {
  return Number(a) - Number(b);
});

const timer = function(input){
  input.forEach(element => {
    if (element > 0 && !isNaN(element)){
      setTimeout(() => console.log(`It was supposed to be a beep at ${element} second`), 1000 * element);
    }
  });
}

// process.stdout.write('.');

timer(input);