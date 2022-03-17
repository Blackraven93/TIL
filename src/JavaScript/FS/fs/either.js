const Nothing = function(val) {
  this.value = val
}

Nothing.of = function(val) {
  new Nothing(val)
};

Nothing.prototype.map = function(f) {
  return this;
}

const Some = function(val) {
  this.value = val
}

Some.of = function(val) {
  return new Some(val);
}

