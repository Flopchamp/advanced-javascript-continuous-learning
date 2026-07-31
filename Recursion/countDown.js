const recursiveCountDown = (num) => {
  if (num < 0) {
    return;
  }
  console.log(num);
  recursiveCountDown(num - 1);
};

recursiveCountDown(5);