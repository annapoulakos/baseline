var ButtonDirectiveModule = angular.module('ButtonDirectiveModule', []);
var buttonTemplate = require('./buttonDirectiveTemplate.html');

class ButtonDirectiveController {
    constructor () {}
}
ButtonDirectiveController.$inject = [];

var ButtonDirectiveDefinition = function () {
    return {
        restrict: 'E',
        scope: {
            fn: '&myCustomFunction',
            label: '@myCustomLabel'
        },
        bindToController: true,
        controller: ButtonDirectiveController,
        controllerAs: 'Button',
        template: buttonTemplate
    };
};

ButtonDirectiveModule.directive('myCustomButton', ButtonDirectiveDefinition);

export default ButtonDirectiveModule;
