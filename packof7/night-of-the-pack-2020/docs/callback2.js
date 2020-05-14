const url1 = "https://httpbin.org/json?q=1";
const url2 = "https://httpbin.org/json?q=2";
const url3 = "https://httpbin.org/json?q=3";
const fetchData = (errorCallback, successCallback, uri, type = "json") => {
  fetch(uri)
    .then((res) => {
      if (type === "json") {
        res.json().then(successCallback).catch(errorCallback);
      } else if (type === "blob") {
        res.blob().then(successCallback).catch(errorCallback);
      } else if (type === "text") {
        res.text().then(successCallback).catch(errorCallback);
      }
    })
    .catch(errorCallback);
};

const onError = (err) => {
  alert("Something went wrong!\n\nError was: " + err);
};

fetchData(
  onError,
  (data) => {
    fetchData(
      onError,
      (moreData) => {
        fetchData(
          onError,
          (moreDataHere) => {
            const finalData = {
              data,
              moreData,
              moreDataHere,
            };
            const text = JSON.stringify(finalData, undefined, 2);
            console.log(text);
          },
          url3
        );
      },
      url2
    );
  },
  url1
);

// Callback heaven
// ...
//    |...
//        |...
// Cascading Waterfall
