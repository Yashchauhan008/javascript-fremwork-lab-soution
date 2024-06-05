const child_process = require("child_process");

child_process.exec("mkdir test", (err, stdout, stdin) => {
  console.log(stdout);
});

setTimeout(() => {
  child_process.exec("rmdir test", (err, stdout, stdin) => {
    console.log(stdout);
  });
}, 2000);
