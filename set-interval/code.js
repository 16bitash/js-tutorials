function logger() {
    console.log('Something');
}

let intervalId;

function cancelInterval() {
    clearInterval(timerId);

    console.log('Interval has been canceled');
}

function startInterval() {
    console.log('Interval has been started');

    timerId = setInterval(logger, 5000);
}
