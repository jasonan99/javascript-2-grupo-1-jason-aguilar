function counter () {
  let counter = 0;

  const increase = function() {
    counter += 1;
    console.log(counter);
  }

  const decrease = function() {
    counter -= 1;
    console.log(counter);
  }

  return {
    increase: increase,
    decrease: decrease
  }
}

const count = counter()