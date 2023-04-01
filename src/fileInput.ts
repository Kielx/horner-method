// Tablica przechowująca dane wejściowe
let numberInputsArray: number[] = []

// Obiekt przechowujący błędy
const errors = {
  noFile: {
    message: 'Wybierz plik z danymi wejściowymi',
    enabled: false
  },
  noX: {
    message: 'Wybierz poprawną wartość X',
    enabled: false
  }
}

/**
 * Funkcja, która nasłuchuje zmiany pliku wejściowego
 *  
 * @param element Element inputu, który ma być nasłuchiwany
 */
 export const setupFileInput: (element: HTMLInputElement) => void = (element)  => {
  return (
    element.addEventListener('change', (event: Event) => {
      if (!event.currentTarget) return
      else {
        const file = (event.currentTarget as HTMLInputElement)?.files?.[0]
        if (file) readFile(file)

      }
    })
  )
  
}

/**
 * Funkcja, która odczytuje plik wejściowy
 * 
 * @param file Plik, który ma być odczytany
 */
const readFile = (file: File) => {
  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    const inputs = event.target?.result
    const inputsArray = inputs?.toString().split(/\r?\n/)
    if (inputsArray) {
      numberInputsArray = inputsArray?.map((input) => Number(input)).reverse()
      updateResult()
    }
  })
  reader.readAsText(file)

}

/**
 * Funkcja, która oblicza wartość wielomianu metodą Hornera
 * 
 * @param wspolczynnikiWielomianu Tablica współczynników wielomianu
 * @returns Wartość wielomianu
 *  
 */
const horner = (wspolczynnikiWielomianu: number[]) =>
{
 
    const x = document.querySelector<HTMLInputElement>("#x")!.valueAsNumber
    // Inicjalizacja wyniku
    let res = wspolczynnikiWielomianu[0];
 
    // Oblicz wartość wielomianu metodą Hornera
    for (let i = 1; i < wspolczynnikiWielomianu.length; i++)
        res = res *
                  x + wspolczynnikiWielomianu[i];
 
    return res
}

/**
 * Aktualizuje wynik obliczeń, wyświetla błędy jeśli istnieją
 */
const updateResult = () => {
  const result = horner(numberInputsArray)
  const resultDiv = document.querySelector<HTMLDivElement>("#result")!
  const errorsDiv = document.querySelector<HTMLDivElement>("#errors")!
  const x = document.querySelector<HTMLInputElement>("#x")!.valueAsNumber

  // Sprawdzenie czy wczytano poprawnie plik z danymi wejściowymi
  // W przypadku błędu wyświetla odpowiedni komunikat
  if (numberInputsArray.length === 0) {
    if (!errors.noFile.enabled) {
      errors.noFile.enabled = true
      const newError = document.createElement('p')
      newError.innerHTML = errors.noFile.message
      newError.id = 'noFile'
      errorsDiv.appendChild(newError)
      errorsDiv.style.display = 'flex'
      resultDiv.innerHTML = ''
    }
    
  }
  // Usuwanie komunikatu o błędzie jeśli został poprawiony
  else {
    errors.noFile.enabled = false
    const noFileError = document.querySelector<HTMLParagraphElement>("#noFile")
    if (noFileError) {
      errorsDiv.removeChild(noFileError)
    }
  }

  // Sprawdzenie czy podano poprawną wartość X
  // W przypadku błędu wyświetla odpowiedni komunikat
  if (isNaN(x)) {
    if (!errors.noX.enabled)  {
      errors.noX.enabled = true
      const newError = document.createElement('p')
      newError.innerHTML = errors.noX.message
      newError.id = 'noX'
      errorsDiv.appendChild(newError)
      errorsDiv.style.display = 'flex'
      resultDiv.innerHTML = ''
    }
  // Usuwanie komunikatu o błędzie jeśli został poprawiony
  } else {
    errors.noX.enabled = false
    const noXError = document.querySelector<HTMLParagraphElement>("#noX")
    if (noXError) {
      errorsDiv.removeChild(noXError)
    }
  }

  // Wyświetlanie wyniku jeśli nie ma błędów
  if (numberInputsArray.length !== 0 && !isNaN(x)) {
    errors.noFile.enabled = false
    errors.noX.enabled = false
    errorsDiv.innerHTML = ''
    errorsDiv.style.display = 'none'
    if (isNaN(result)){
      resultDiv.innerHTML = 'Wygenerowany wynik nie jest prawidłową liczbą. Upewnij się, że podałeś poprawne dane wejściowe, tj. plik, który zawiera tylko liczby w kolejnych wierszach.'
      resultDiv.style.color = 'red'
      return
    }
    resultDiv.style.color = 'white'
    resultDiv.innerHTML = `Wynik to: ${result}`
  }
}

/**
 * Funkcja, która nasłuchuje zmiany wartości inputu X
 * 
 * @param element Element inputu, który ma być nasłuchiwany
 */
export const setupUpdateResult = (element: HTMLInputElement) => {
  element.addEventListener('change', () => {
    updateResult()
  })
}
