const url = "http://httpbin.org/json";

fetch(url)
  .catch((err) => {
    alert("Something went wrong!\n\nError was: " + err);
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const text = JSON.stringify(data, undefined, 2);
    console.log(text);
  });
