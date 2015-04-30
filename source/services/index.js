import EventBus from './EventBus';

var Services = angular.module('Services', []);

Services.service('EventBus', EventBus);

export default Services;
