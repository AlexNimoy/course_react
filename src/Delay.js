export const later = (delay) => {
  return new Promise((resolve, reject) => {
    if(typeof delay != 'number')
      reject('Bad delay');
    else
      setTimeout(() => resolve(delay), delay);
  })
}
