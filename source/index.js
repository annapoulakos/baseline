import angular from 'angular';
import ItemsControllerModule from './items/itemsController';
import EventBusModule from './eventBus';
import ButtonDirectiveModule from './buttonDirective';

angular.module('OurTestApplication', [
    ItemsControllerModule.name,
    EventBusModule.name,
    ButtonDirectiveModule.name
]);

export default OurItemsModule;
