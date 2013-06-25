var Events = require("events").EventEmitter;
var events = new Events;

// Start the server.
exports.sub = subscribe;
function subscribe(topic, cb)
{
  events.addListener(topic, cb);
  return [topic, cb];
}
exports.subonce = subonce;
function subonce(topic, cb)
{
  events.once(topic, cb);
}
exports.unsub = unsub;
function unsub(handler)
{
  events.removeListener(handler[0], handler[1]);
}
exports.pub = pub;
function pub(topic)
{
  var args = Array.prototype.slice.call(arguments);
  return events.emit(topic, args.slice(1, -1));
}
