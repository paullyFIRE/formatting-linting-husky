console.log('hello')

const somethingJank = 5

function myName(ishere: number) {
  switch (true) {
    default:
      return
  }
}

//  some more changes

// comment change
// another comment

interface IApple {
  juiciness: number
  color: 'green' | 'red'
}

const apple: IApple = {
  color: 'green',
  juiciness: 5,
}

const apple2: IApple = {
  color: 'red',
  juiciness: 4,
}

// this comment should change

const pew = async (
  thing: number,
  somethingElse: string,
  snake_Case: string,
) => {
  thing += 5
  return null
}
