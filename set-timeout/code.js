function logger() {
    console.log('Something');
}

let timerId;

function cancelTimer() {
    clearTimeout(timerId);

    console.log('Timer has been canceled');
}

function startTimer() {
    console.log('Timer has been started');

    timerId = setTimeout(logger, 5000);
}
