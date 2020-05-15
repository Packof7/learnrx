const url1 = "https://httpbin.org/uuid";
const url2 = "https://httpbin.org/uuid";
const url3 = "https://httpbin.org/uuid";

const promises = [];

promises.push(fetch(url1), fetch(url3), fetch(url3));

Promise.race((resolve, reject) => {
  setTimeout(reject, 3E3);
}, fetch(url1));

Promise.all(promises)
  .catch((err) => {
    alert("Something went wrong!\n\nError was: " + err);
  })
  .then(([response1, response2, response3] = responses) => {
    return Promise.all([response1.json(), response2.json(), response3.json()]);
  })
  .then((data) => {
    const text = JSON.stringify(data, undefined, 2);
    console.log(text);
  });

// Vorteile: Trust
// 1. Wird garantiert nur 1x resolved
// 2. Kann auch rejected werden
// 3. Dazwischen gibt es nichts, nur den Status pending (keine Möglichkeit zum canceln)
// 4. Immutable wenn resolved
// 5. Exceptions können als Errors abgefangen werden (.then(onSuccess, onError))
