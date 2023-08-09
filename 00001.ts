type MyReadOnly<T> = {
    readonly [k in keyof T]: T[k]
}

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

const test: MyReadOnly<Todo1> = {
  title: '1',
  description: 'string',
  completed: false,
  meta: {
    author: 'string'
  }
}

test.title = 'abc';