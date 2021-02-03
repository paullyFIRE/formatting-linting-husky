console.log('hello')

interface IApple {
  juiciness: number
  color: 'green' | 'red'
}

const apple: IApple = {
  color: 'green',
  juiciness: 5,
}

const apple2: IApple = {
  color: 'purple',
  juiciness: 4,
}
