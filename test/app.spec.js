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

        describe('EventBus service: ', function () {
            it('should fail initial deregistration check', function () {
                expect(eb._HasDeregistrationFunction('aaaa')).toBe(false);
            });

            it('should generate a guid on registration: ', function () {
                var guid = eb.Register('signal', function () {});
                expect(guid).not.toBe(null);
            });

            it('should pass deregistration check: ', function () {
                var guid = eb.Register('signal', function () {});
                expect(eb._HasDeregistrationFunction(guid)).toBe(true);
            });
        });
    });
});
