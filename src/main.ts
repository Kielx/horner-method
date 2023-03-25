import  setupFileInput from "./fileInput";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
     Hello World
     <input type="file" id="file" />
  </div>
`;

setupFileInput(document.querySelector<HTMLInputElement>("#file")!);