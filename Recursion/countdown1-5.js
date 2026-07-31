const recursiveCountDown = (num) => {
  if (num <= 0) {
    return;
  }
   recursiveCountDown(num - 1);
   console.log(num);
};
recursiveCountDown(5);