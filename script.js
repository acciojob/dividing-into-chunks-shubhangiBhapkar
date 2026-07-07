const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  const result = [];
  let current = [];
  let sum = 0;

  for (const num of arr) {
    if (sum + num <= n) {
      current.push(num);
      sum += num;
    } else {
      result.push(current);
      current = [num];
      sum = num;
    }
  }

  if (current.length) {
    result.push(current);
  }

  return result;
};

const n = 5; // or use prompt("Enter n: ") if running in a browser
alert(JSON.stringify(divide(arr, n)));