import chalk from "chalk";
import sum from "@monorepo/sum";

const total = sum(5, 5);

console.log(chalk.green(total));
