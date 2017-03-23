'use strict';

var Control_Monad_Aff = require('../Control.Monad.Aff');
var net = require('net');

exports.connectTCP = function(conf) {
  return function(onSuccess, onError) {
    var socket = new net.Socket();
    var errorHandler = function(err) {
      onError(err);
    };
    socket.once('error', errorHandler);
    socket.connect({
      host: conf.host,
      port: conf.port,
    }, function() {
      socket.removeListener('error', errorHandler);
      onSuccess(socket);
    });
    return Control_Monad_Aff.nonCanceler;
  };
};

exports.asStream = function(socket) {
  return socket;
};
