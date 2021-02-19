const { chalk, inquirer, print } = require("./tools/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

//DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses.push(address.address);
    }
  }
}
//DETECT IP *END!
const questionTools = [
  "➥ Information",
  "➥ Like Timeline",
  "➥ F-L-DM -> FOLLOW + DM ",
  "➥ F-L-DM -> FOLLOW + DM [NEW]",
  "\n",
];

const menuQuestion = {
  type: "list",
  name: "choice",
  message:
    "Select tools:\n  Read the (❆ Information) first before using the tool! Nyaa~\n\n",
  choices: questionTools,
};

const main = async () => {
  try {
    const { choice } = await inquirer.prompt(menuQuestion);
    choice == questionTools[0] && require("./tools/info.js");
    choice == questionTools[1] && require("./tools/liketimeline.js");
    choice == questionTools[2] && require("./tools/fftdmauto.js");
    choice == questionTools[3] && require("./tools/fftdmbetaauto.js");
    choice == questionTools[4] && process.exit();
  } catch (err) {
    print(err, "err");
  }
};

console.log(chalk`{bold.green

  116 111 111 108 115 105 103  118 51 
  }`);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(
  "  Ξ START  : ".bold.red + moment().format("D MMMM YYYY, h:mm:ss a")
);
console.log("  Ξ YPATH  : ".bold.red + userHome);
console.log("  Ξ YOUIP  : ".bold.red + addresses);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(chalk`{bold.yellow
  Github ••••••••••••••••••••••••••••••••••
  : 
  •••••••••••••••••••••••••••••••••••••••••
  : 
  :  }\n`);
main();