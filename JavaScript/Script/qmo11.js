function throwError() {
  try {
    throw new Error("Example Error 1");
  } catch (error) {
    document.getElementById("errorText").innerText = error.message;
  }
}

function throwErrorNoCatch() {
  throw new Error("Example Error 2");
}

window.onerror = (message, source, lineno, colno, error) => {
  alert(`An error occurred:${message}`);
  console.error("An error occurred:", message);
  console.error("Source:", source);
  console.error("Line Number:", lineno);
  console.error("Column Number:", colno);
  console.error("Error Object:", error);
};
