import chalk from "chalk";

export default (x, y) => {
  console.log(`Adding ${chalk.blue(x)} + ${chalk.blue(y)}`);

  return x + y;
};
