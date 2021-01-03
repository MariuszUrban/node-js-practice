console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv)

const [,,firstName, lastName] = process.argv;
console.log(`🚀 ~ file: globalProcess.js ~ line 5 ~ firstName, lastName, ${firstName}, ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag]
}

const greeting =grab('--greeting');
console.log("🚀 ~ greeting", `${greeting}`);
const user = grab('--user');
console.log("🚀 ~ user", `${user}`);
