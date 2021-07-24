export const localStorageGetCarrito = () => {
  const carritoLocal =
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito'))
  return carritoLocal
}

export const localStorageRemoveCarrito = () =>
  typeof window !== 'undefined' && localStorage.clear()
