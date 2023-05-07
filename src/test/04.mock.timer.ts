export const after1000ms = (callback: () => void) => {
  setTimeout(() => {
    callback()
  }, 1000)
}