import  {setupFileInput, setupUpdateResult} from "./fileInput";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
     <h1>Obliczanie wartości funkcji wielomianowej dla zadanej wartości argumentu - metodą Hörner’a.</h1>
     <div id="filePickerContainer">
     <label for="file">Wybierz plik z danymi wejściowymi</label>
     <input type="file" id="file" accept=".txt" />
     </div>
     <div id="inputResult"></div>
     <div id="xContainer">
     <label for="x">Podaj wartość X</label>
     <input type="number" id="x" value="0" step="0.1" />
     </div>
     <div id="errors"></div>
     <div id="result">Wybierz plik z danymi wejściowymi oraz podaj wartość X by obliczyć wartość funkcji wielomianowej</div>
  </main>
`;

setupFileInput(document.querySelector<HTMLInputElement>("#file")!);
setupUpdateResult(document.querySelector<HTMLInputElement>("#x")!);