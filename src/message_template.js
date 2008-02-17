DrNicTest.Unit.MessageTemplate = function(string) {
  var parts = [];
  var str = DrNicTest.gsub((string || ''), /(?=[^\\])\?|(?:\\\?|[^\?])+/, function(part) {
    parts.push(part[0]);
  });
  this.parts = parts;
};

DrNicTest.Unit.MessageTemplate.prototype.evaluate = function(params) {
  var results = [];
  for (var i=0; i < this.parts.length; i++) {
    var part = this.parts[i];
    results.push(part == '?' ? DrNicTest.Unit.inspect(params.shift()) : part.replace(/\\\?/, '?'));
  };
  return results.join('');
  // return this.parts.map(function(part) {
  //   return part == '?' ? DrNicTest.Unit.inspect(params.shift()) : part.replace(/\\\?/, '?');
  // }).join('');
};
