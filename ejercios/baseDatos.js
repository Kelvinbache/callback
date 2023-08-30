const requeret = new XMLHttpRequest();

requeret.addEventListener("readystatechange", () => {
  const readyS = requeret.readyState;
  if (readyS === 4) {
    const response = requeret.responseText;
    console.log(response);
  }
});

requeret.open("GET", "https://jsonplaceholder.typicode.com/todos");
requeret.send();
