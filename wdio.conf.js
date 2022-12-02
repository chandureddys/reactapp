console.log(" arguments ")
console.log(process.argv.some((arg) => arg === '--env'));
process.argv.forEach((arg) => {
  if(arg.indexOf('--env')!==-1){
    console.log("arg " + arg);
    const env = arg.replace('--env=', '');
    switch(env) {
      case 'dev':
            console.log("dev env");
            break;
      default:
        console.log("local");
        break;
  }
});
