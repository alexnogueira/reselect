"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitError = emitError;
exports.subscribe = subscribe;
var subscribers = {};
var currentSubscriberId = 0;

function unsubscribe(id) {
  delete subscribers[id];
}

function subscribe(fn) {
  var subscriptionId = currentSubscriberId++;
  subscribers[subscriptionId] = fn;
  return unsubscribe.bind(null, subscriptionId);
}

function emitError() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var subscribersIds = Object.keys(subscribers);
  subscribersIds.forEach(function (id) {
    return subscribers[id].apply(subscribers, args);
  });
}