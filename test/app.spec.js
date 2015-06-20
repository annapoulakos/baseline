describe('Main Application', function () {
    var application, dependencies;

    var hasModule = function (mod) {
        return dependencies.indexOf(mod) >= 0;
    };

    beforeEach(module('OurTestApplication'));
    beforeEach(function () {
        application = angular.module('OurTestApplication');
        dependencies = application.requires;
    });

    it('should be registered: ', function () {
        expect(app).not.toBe(null);
    });

    it('should have OurItemsModule.ItemsController registered: ', function () {
        expect(hasModule('OurItemsModule.ItemsController')).toBe(true);
    });
});
