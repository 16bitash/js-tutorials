const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

setTimeout(() => {
  console.log("Hello");

  setTimeout(() => {
    console.log("World");

    setTimeout(() => {
      console.log("Goodbye");

      setTimeout(() => {
        console.log("Something else");
      }, 1000);
    }, 1000);
  }, 3000);
}, 2000);

wait(2000)
  .then(() => {
    console.log("Hello");

    return wait(3000);
  })
  .then(() => {
    console.log("World");

    return wait(1000);
  })
  .then(() => {
    console.log("Goodbye");

    return wait(1000);
  })
  .then(() => {
    console.log("Something else");
  });

async function log() {
  await wait(2000);
  console.log("Hello");

  await wait(3000);
  console.log("World");

  await wait(1000);
  console.log("Goodbye");

  await wait(1000);
  console.log("Something else");
}

log();

const promiseArray = [wait(2000), wait(3000), wait(1000)];

Promise.all(promiseArray).then(() => {
  console.log("Hello");
});

fetch("notification")
  .then((data) => console.log(data))
  .then(() => fetch("mails"))
  .then((data) => console.log(data));

Promise.all([fetch("notification"), fetch("mails")]).then((data) => {
  console.log(data);
});
