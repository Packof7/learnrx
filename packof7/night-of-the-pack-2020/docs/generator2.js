const fetchData = function* () {
  const data = {
    author: "Yours Truly",
    title: "Sample response",
  };

  let skip = false;

  while (!skip) {
    skip = yield Math.random();
  }

  return "end";
};

const dataGenerator = fetchData();
const response1 = dataGenerator.next();
const response2 = dataGenerator.next(false);
const data = Object.assign(response1.value, response2.value);
const text = JSON.stringify(data, undefined, 2);
console.log(text);
