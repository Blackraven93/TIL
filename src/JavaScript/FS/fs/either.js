const Nothing = function(val) {
  this.value = val
}

Nothing.of = function(val) {
  new Nothing(val)
};

Nothing.prototype.map = function(f) {
  return f(this);
}

const Some = function(val) {
  this.value = val
}

Some.of = function(val) {
  return new Some(val);
}

Some.prototype.map = function(fn) {
  return Some.of(fn(this.value))
}

console.log(Some.of('test').map(x => x.toUpperCase()))

// Nothing.of('test').map(x => x.toUpperCase())

class Either {
  constructor(value){
    this.$value = value;
  }

  static right(value) {
    return new Right(value)
  }

  static left(value) {
    return new Left(value);
  }
}

class Right extends Either {
  get isRight() {
    return true;
  }

  get isLeft() {
    return false
  }

  map(fn) {
    return new Right(fn(this.$value));
  }
}

class Left extends Either {
  get isRight() {
    return false;
  }

  get isLeft() {
    return true;
  }

  map(fn) {
    return this;
  }
}

const books = [
  { id: 'book1', title: 'coding with javascript', author: 'Chris Minnick, Eva Holland' },
  { id: 'book2', title: 'speaking javaScript', author: 'Axel Rauschmayer' },
];


const logByEitherStatus = (eitherBook) => {
  return eitherBook.isLeft 
    ? console.error(`Author: ${eitherBook.$value.author}`) 
    : console.log(`Author: ${eitherBook.$value.author}`)
}

const logBookAuthor = (bookId, books) => {
  return pipe(
    findBookById(bookId),
    validateBookAuthor,
    logByEitherStatus
  )(books)
};


logBookAuthor('book1', books);
logBookAuthor('book2', books); 
