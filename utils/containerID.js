const exec = require('child_process').execSync;

// Get the container id of the container running this program
module.exports = exec('cat /proc/self/cgroup | head -n 1 | cut -d "/" -f 3').toString().substr(0, 10);
