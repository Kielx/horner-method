const setupFileInput: (element: HTMLInputElement) => void = (element)  => {
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
  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    console.log(event.target?.result)
  })
  reader.readAsText(file)
}

export default setupFileInput