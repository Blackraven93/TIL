const publisher = {
  subscribers: {
    any: [],
  },
  subscribe(fn, type = 'any') {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []; // 그러니까 구독자를 생성하는 함수
    }
    this.subscribers[type].push(fn); // 그리고 구독자한테 함수를 집어넣음;
  },

  unsubscribe(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },

  publish(publication, type) {
    this.visitSubscribers('publish', publication, type);
  },

  visitSubscribers(action, arg, type = 'any') {
    const pubtype = type,
      subscribers = this.subscribers[pubtype],
      max = subscribers.length;

    Array.from({ length: max }).forEach((_, index) => {
      if (action === 'publish') {
        subscribers[index](arg);
      } else {
        if (subscribers[index] === arg) {
          subscribers.splice(i, 1);
        }
      }
    });
  },
};

const makePublisher = (paper) => {
  for (const key in publisher) {
    if (
      Object.hasOwnProperty.call(publisher, key) &&
      typeof publisher[key] === 'function'
    ) {
      paper[key] = publisher[key];
    }
  }

  paper.subscribers = { any: [] };
};

const paper = {
  daily() {
    this.publish('big news today');
  },

  monthly() {
    this.publish('interesting analysis', 'monthly');
  },
};

makePublisher(paper); // 여기서 상위에 paper를 등록해줌

const joe = {
  drinkCoffee(paper) {
    console.log(`${paper}를 읽었습니다.`);
  },
  sundayPreMap(monthly) {
    console.log(`잠들기 전에 ${monthly}를 읽고있습니다.`);
  },
};

console.log(publisher);
console.log(paper);
/**
 * {
  daily: [Function: daily],
  monthly: [Function: monthly],
  subscribe: [Function: subscribe],
  unsubscribe: [Function: unsubscribe],
  publish: [Function: publish],
  visitSubscribers: [Function: visitSubscribers],
  subscribers: { any: [] }
}
 */
paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreMap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();

makePublisher(joe);
joe.tweet = function (msg) {
  this.publish(msg);
};

paper.readTweets = function (tweet) {
  console.log(`Call big meeting! Someone ${tweet}`);
};

joe.subscribe(paper.readTweets);

joe.tweet('hated the paper today');

console.log(publisher);
console.log(paper);
/**
 * {
  daily: [Function: daily],
  monthly: [Function: monthly],
  subscribe: [Function: subscribe],
  unsubscribe: [Function: unsubscribe],
  publish: [Function: publish],
  visitSubscribers: [Function: visitSubscribers],
  subscribers: {
    any: [ [Function: drinkCoffee] ],
    monthly: [ [Function: sundayPreMap] ]
  },
  readTweets: [Function (anonymous)]
}
 */
