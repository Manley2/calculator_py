function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const expression = document.getElementById("result").value;
  fetch("/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expression: expression })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").value = data.result;
    })
    .catch(() => {
      document.getElementById("result").value = "Error";
    });
}
