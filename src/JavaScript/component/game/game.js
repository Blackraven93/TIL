const publisher = {
  subscribers: {
    any: [],
  },

  on(type = 'any', fn, context = this) {
    fn = typeof fn === 'function' ? fn : context[fn];

    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push({ fn, context });
  },

  remove(type, fn, context) {
    this.visitSubscribers('unsubscribe', type, fn, context);
  },

  fire(type, publication) {
    this.visitSubscribers('publish', type, publication);
  },

  visitSubscribers(action, type = 'any', arg, context) {
    const pubtype = type,
      subscribers = this.subscribers[pubtype],
      max = subscribers ? subscribers.key().length : 0;

    Array.from({ length: max }).forEach((_, i) => {
      if (action === 'publish') {
        subscribers[i].fn.call(subscribers[i].context, arg);
      } else {
        if (subscribers[i].fn === arg && subscribers[i].context === context) {
          subscribers.splic(i, 1);
        }
      }
    });
  },
};

function Player(name, key) {
  this.points = 0;
  this.name = name;
  this.key = key;
  this.fire('newPlayer', this);
}

Player.prototype.play = function () {
  this.points += 1;
  this.fire('play', this);
};

const game = {
  keys: {},
  addPlayer(player) {
    const key = player.key.toString().charCodeAt(0);
    this.keys[key] = player;
  },

  handleKeyPress(e) {
    e = e || window.event;
    if (game.keys[e.which]) {
      game.keys[e.which].play();
    }
  },

  handlePlay(player) {
    const players = this.keys,
      score = {};

    for (const i in object) {
      if (Object.hasOwnProperty.call(object, i)) {
        score[players[i].name] = players[i].points;
      }
    }
    this.fire('scorechange', score);
  },
};
