class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname
    this._lastname = lastname
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;    
  }

  get ssn() {
    return this._ssn
  }

  get firstname() {
    return this._firstname
  }

  get lastname() {
    return this._lastname
  }

  get address() {
    return this._address
  }

  get birthYear() {
    return this._birthYear
  }

  set birthYear(year) {
    this._birthYear = year
  }

  set address(addr) {
    this._address = addr;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school
  }
}

const peopleInSameAddress = (friends) => {
  const result = [];
  for (const idx in friends) {
    const friend = friends[idx];
    if (this.address === friend.address) result.push(friend);
  }
  return result;
}

const studentsInSameCountyAndSchool = (friends) => {
  const closeFriends = peopleInSameAddress(friends);
  const result = [];
  for (const idx in closeFriends) {
      const friend = closeFriends[idx];
      if (friend.school === this.school) {
        result.push(friend);
      }
    }
  return result
}


const curry = new Student('haskell', 'Curry', '111-111-111', 'Penn state');
curry.address = 'US'

const turing = new Student('Alan', 'Turing', '222-222-222', 'Princeton');
turing.address = 'US'

const church = new Student('Alonzo', "Church", '333-333-333', 'Princeton');
church.address = 'US'

// fp
const selector = (country, school) => student => {
  return student.address === country && student.school === school
} // 학생의 국가와 학교를 비교하는 함수

const findStudentsBy = (friends, selector) => friends.filter(selector);

console.log(findStudentsBy([curry, turing, church], selector('US', 'Princeton')))
