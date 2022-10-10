import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>${import.meta.env.VITE_MY_NAME}</h1>
  <h1>${import.meta.env.VITE_INFO}</h1>
`;
