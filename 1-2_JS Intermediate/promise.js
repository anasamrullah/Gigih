const test = (number) =>
  new Promise((resolve) => {
    setTimeout(resolve, number);
  });

test(3000).then(() => console.log("2"));
test(5000).then(() => console.log("3"));
test(1000).then(() => console.log("1"));
test(6000).then(() => console.log("4"));
asyncAwait();
