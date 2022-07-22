exports.sleepBlock = function (durationMs) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + durationMs) {
    }
}