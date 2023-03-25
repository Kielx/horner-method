import  {setupFileInput, setupUpdateResult} from "./fileInput";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
     Hello World
     <input type="file" id="file" />
     <div id="inputResult"></div>
     <input type="number" id="x" />
     <div id="result">Result:</div>
  </div>
`;

setupFileInput(document.querySelector<HTMLInputElement>("#file")!);
setupUpdateResult(document.querySelector<HTMLInputElement>("#x")!);