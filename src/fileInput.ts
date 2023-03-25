let numberInputsArray: number[] = []

export const setupFileInput: (element: HTMLInputElement) => void = (element)  => {
  return (
    element.addEventListener('change', (event: Event) => {
      if (!event.currentTarget) return
      else {
        const file = (event.currentTarget as HTMLInputElement)?.files?.[0]
        console.log(file)
        if (file) readFile(file)

      }
    })
  )
  
}

const readFile = (file: File) => {
  const inputResult = document.querySelector<HTMLDivElement>("#inputResult")!
  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    const inputs = event.target?.result
    const inputsArray = inputs?.toString().split(/\r?\n/)
    if (inputsArray)
    numberInputsArray = inputsArray?.map((input) => Number(input))
    if (inputs) {
      inputResult.innerHTML = inputs.toString()
    }
  })
  reader.readAsText(file)

}

const horner = (wielomian: number[], n: number) =>
{
 
    const x = document.querySelector<HTMLInputElement>("#x")!.valueAsNumber
    // Inicjalizacja wyniku
    let res = wielomian[0];
 
    // Oblicz wartość wielomianu metodą Hornera
    for (let i = 1; i < n; i++)
        res = res *
                  x + wielomian[i];
 
    return res
}

export const setupUpdateResult = (element: HTMLInputElement) => {
  element.addEventListener('change', (event: Event) => {
    if (!event.currentTarget) return
    else {
      console.log('afdsd')
  const result = horner(numberInputsArray, numberInputsArray.length)
  const resultDiv = document.querySelector<HTMLDivElement>("#result")!
  resultDiv.innerHTML = `Wynik to: ${result}`
    }
  })
}
