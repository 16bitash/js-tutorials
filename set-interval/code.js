function logger() {
    console.log('Something');
}

let intervalId;

function cancelInterval() {
    clearInterval(intervalId);

    console.log('Interval has been canceled');
}

function startInterval() {
    console.log('Interval has been started');

    intervalId = setInterval(logger, 5000);
}
