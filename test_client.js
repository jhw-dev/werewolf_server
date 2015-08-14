/**
 * Created by yuanfei on 15/8/15.
 */
var WebSocket = require('ws');
var ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {

    var d=JSON.stringify({cmd:1001,data:{}});
    ws.send(d)
});

ws.on('message', function(data, flags) {
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
});