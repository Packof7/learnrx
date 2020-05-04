const url = "http://httpbin.org/json";
const fetchData = function* (uri) {
  yield {
    title: "Sample response",
  };
  yield {
    author: "Yours Truly",
  };
};

const dataGenerator = fetchData(url);
const responseP1 = dataGenerator.next();
const responseP2 = dataGenerator.next();
const data = Object.assign(responseP1.value, responseP2.value);
const text = JSON.stringify(data, undefined, 2);
console.log(text);
