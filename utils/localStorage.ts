export const localStorageGetCarrito = () => {
  const storedState =
    typeof window !== 'undefined' && localStorage.getItem('carrito')
  let parsedState = ''

  if (typeof storedState === 'string') {
    parsedState = JSON.parse(storedState)
  }

  return parsedState
}

export const localStorageRemoveCarrito = () =>
  typeof window !== 'undefined' && localStorage.clear()
