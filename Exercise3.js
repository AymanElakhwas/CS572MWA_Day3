let EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('tick');
        }, 1000);
    }

    listenOnTick(callback) {
        this.on('tick', callback);
    }
}

let clock = new Clock();
clock.listenOnTick(() => { console.log('woohoo') });