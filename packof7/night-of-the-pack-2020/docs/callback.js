const url = endpoints.SLIDESHOW_DATA;
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

fetchData(
  (err) => {
    alert("Something went wrong!\n\nError was: " + err);
  },
  (data) => {
    const text = JSON.stringify(data, undefined, 2);
    addResponseText(text);
  },
  url
);
