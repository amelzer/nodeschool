const args = process.argv;
args.shift();
args.shift();
const sum = args.reduce((curr, carry) => {return parseInt(carry)+curr}, 0);
console.log(sum);
