describe('Application: ', function () {
    var deps, app, eb;
    var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
    };

    beforeEach(function () {
        app = angular.module('app');
    });

    it('should be registered: ', function () {
        expect(app).not.toBe(null);
    });

    beforeEach(function () {
        deps = app.requires;
    });

    it('should have Services as a dependency', function () {
        expect(hasModule('Services')).toBe(true);
    });

    it('should have an EventBus service', inject(function(EventBus) {
        expect(EventBus).not.toBe(null);
    }));
});
