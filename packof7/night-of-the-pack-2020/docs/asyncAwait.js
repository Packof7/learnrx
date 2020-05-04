const url = "http://httpbin.org/json";

// async function fetchData (uri) {
const fetchData = async (uri) => {
  return await fetch(uri);
};

try {
  const response = await fetchData(url);
  const data = await response.json();
  const text = JSON.stringify(data, undefined, 2);
  console.log(text);
} catch (err) {
  alert("Something went wrong!\n\nError was: " + err);
}
