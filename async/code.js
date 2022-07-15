function logger() {
    console.log('something');
}

setTimeout(logger, 0);

console.log('nothing');

while (true) {};
