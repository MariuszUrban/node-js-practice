const cp = require("child_process");

const questionApp = cp.spawn("node", ["../question2.js"])

questionApp.stdin.write("Mario \n");
questionApp.stdin.write("PL \n");
questionApp.stdin.write("A lot \n");


questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log(`question exited`)
})