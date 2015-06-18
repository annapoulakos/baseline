var EventBusModule = angular.module('EventBus', []);

class EventBus {
    constructor ($rootScope) {
        this.$scope = $rootScope;

        this.registry = [];
        this.index = 0;
    }

    Register (event, callback) {
        this.index++;

        this.registry[this.index] = this.$scope.$on(event, function (e, p) {
            callback(p);
        });

        return this.index;
    }

    Deregister (eventId) {
        if (this.registry[eventId] &&
            typeof this.registry[eventId] === 'function') {
            this.registry[eventId]();
            delete this.registry[eventId];
        }
    }
}

EventBus.$inject = ['$rootScope'];

EventBusModule.service('EventBus', EventBus);

export default EventBusModule;
