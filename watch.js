const chokidar = require('chokidar');
var exec = require('child_process').execSync;

// // One-liner for current directory
chokidar.watch(['./_config.fluid.yml']).on('all', (event, path) => {
    console.log(path)
    exec('npm run build', {
        stdio:'inherit'
    });
});