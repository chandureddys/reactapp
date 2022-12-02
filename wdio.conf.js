console.log(" arguments ")
console.log(process.argv.some((arg) => arg === '--env'));
process.argv.forEach((arg) => {
  if(arg.indexOf('--env')!==-1){
    console.log("arg" + arg);
  }
});
