import colors from "colors";

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Должно быть два числовых аргумента");
} else if (isNaN(args[0]) || isNaN(args[1])) {
  console.log("Аргументы должны быть числом");
} else if (args[0] >= args[1]) {
  console.log("Первый аргумент должен быть меньше второго");
} else if (args[0] < 0 && args[1] <= 0) {
  console.log("В указанном интервале нет простых чисел");
} else {
  args[0] = parseInt(args[0]);
  args[1] = parseInt(args[1]);
  let prime = [];
  for (let i = args[0]; i <= args[1]; i++) {
    if (i < 2) continue;
    let flag = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) prime.push(i);
  }
  if (prime.length == 0) {
    console.log("В указанном интервале нет простых чисел");
  } else {
    for (let i = 0; i < prime.length; i++) {
      if ((i + 1) % 3 == 0) console.log(colors.red(prime[i]));
      else if ((i + 1) % 3 == 1) console.log(colors.green(prime[i]));
      else console.log(colors.yellow(prime[i]));
    }
  }
}
