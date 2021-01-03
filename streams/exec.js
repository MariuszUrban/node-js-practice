const cp = require("child_process");
const { stderr } = require("process");

cp.exec("open https://github.com/MariuszUrban")

cp.exec("node readStream", (err, data, stderr) => {
    console.log(data)
})

