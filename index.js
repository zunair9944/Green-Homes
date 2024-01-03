const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8080;
const child_process = require('child_process');
const io = require('socket.io')(server);

app.use(express.static('public'));

var workerProcess;

const childProcesses = [];

function killChildProcesses() {
    childProcesses.forEach(workerProcess => {
        workerProcess.kill('SIGINT');
        workerProcess.on('close', function (code) {
            console.log('child process exited with code ' + code);
            console.log('child process killed');
            io.emit('dataaa', 'previous server stopped');
        });
        childProcesses.pop(workerProcess);
        // console.log('child process killed');
        // io.emit('dataaa', 'child process killed');
    });
}

app.use('/start', async (req, res) => {
    killChildProcesses();
    workerProcess = child_process.spawn('node', ['server.js']);
    childProcesses.push(workerProcess);
    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
        io.emit('dataaa', 'stdout: ' + data);
    });
    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    res.send('Hello World!');

});

app.get('/stop', (req, res) => {
    workerProcess.kill('SIGINT');
    workerProcess.on('close', function (code) {
        console.log('child process exited with code ' + code);
        io.emit('dataaa', '======Server stopped======');
        res.send('Hello World!');
    });
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});