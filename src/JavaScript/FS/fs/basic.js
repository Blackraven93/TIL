// 순수 함수를 통한 캐싱
const longRunningFunction = (ip) => {
  return ip;
};

const ip = 1;

const longRunningFnBookKeeper = { 2: 3, 4: 5 };
longRunningFnBookKeeper.hasOwnProperty(ip)
  ? longRunningFnBookKeeper[ip]
  : (longRunningFnBookKeeper[ip] = longRunningFunction(ip));

console.log(longRunningFnBookKeeper);


// 내부 접근 차당
const zipCode = (code, location) => {
  let _code = code;
  let _location = location || '';

  return {
    code: function() {
      return _code;
    },
    location: function() {
      return _location
    },
    fromString: function(str) {
      let parts = str.split('-')
      return zipCode(parts[0], parts[1]);
    },
    toString: function() {
      return _code + '-' + _location;
    }
  }
}

const princetonZip = zipCode('02', '444-333');
console.log(princetonZip.toString())

const coordinate = (lat, long) => {
  let _lat = lat
  let _long = long

  return {
    latitude: function() {
      return _lat;
    },
    longitude: function() {
      return _long;
    },
    translate: function(dx, dy) {
      return coordinate(_lat + dx, _long + dy)
    },
    toString: function() {
      return `(${_lat}, ${_long})`
    }
  }
}

const greenwich = coordinate(51.4778, 0.0015);
console.log(greenwich.toString())
console.log(greenwich.translate(10, 10).toString())
