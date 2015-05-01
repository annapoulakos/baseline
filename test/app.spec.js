describe('Application: ', function () {
    var deps, app, eb;
    var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
    };

    beforeEach(module('app'));

    beforeEach(function () {
        app = angular.module('app');
        deps = app.requires;
    });

    beforeEach(inject(function(EventBus) {
        eb = EventBus;
    }));

    it('should be registered: ', function () {
        expect(app).not.toBe(null);
    });

    it('should have Services as a dependency', function () {
        expect(hasModule('Services')).toBe(true);
    });

    it('should have an EventBus service', function () {
        expect(eb).not.toBe(null);
    });
});
