export const setItem = (...args) => {
  localStorage.setItem(...args);
}

export const getItem = (...args) => {
  return localStorage.getItem(...args);
}

export const removeItem = (...args) => {
  localStorage.removeItem(...args);
}
