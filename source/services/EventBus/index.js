class EventBus {
    constructor ($rootScope) {
        this.$scope = $rootScope;
        this.registry = {};
    }

    Register (signal, callback) {
        var guid = this._GenerateGuid();

        this.registry[guid] = {
            signal: signal,
            callback: callback,
            deregistrationFunction: this.$scope.$on(signal, (event, params) => {
                callback(params);
            })
        };

        return guid;
    }

    Deregister (guid) {
        if (this._HasDeregistrationFunction(guid)) {
            this.registry[guid].deregistrationFunction();
            delete this.registry[guid];
        }
    }

    _HasDeregistrationFunction (guid) {
        return this.registry.hasOwnProperty(guid) &&
            this.registry[guid].hasOwnProperty('deregistrationFunction') &&
            typeof this.registry[guid].deregistrationFunction === 'function';
    }

    _GenerateGuid () {
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

        return guid.replace(/[xy]/g, (v) => {
            var r = Math.random() * 16|0,
                x = v === 'x'? r: r&0x3|0x8;
            return x.toString(16);
        });
    }
}

EventBus.$inject = ['$rootScope'];

export default EventBus;
