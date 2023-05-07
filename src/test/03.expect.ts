// https://vitestjs.io/docs/en/expect

export const profile = {
  name: 'peter',
  age: 12,
  hobbies: ['coding', 'reading'],
};

export const asyncResolveFunc = () => {
  return new Promise((resolve) => resolve('done'))
}

export const asyncRejectFunc = () => {
  return new Promise((_, reject) => reject('error'))
}

