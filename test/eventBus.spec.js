describe("Event Bus: ", function () {
    var eb;
    beforeEach(module('app'));

    beforeEach(inject(function(EventBus) {
        eb = EventBus;
    }));

    it('should fail initial deregistration check: ', function() {
        expect(eb._HasDeregistrationFunction('aaaa')).toBe(false);
    });

    it('should generate a guid on registration: ', function () {
        var guid = null;
        guid = eb.Register('signal', function () {});
        expect(guid).not.toBe(null);
    });

    it('should allow deregistration of a function: ', function () {
        var guid = eb.Register('signal', function () {});
        expect(guid).not.toBe(null);
        expect(eb._HasDeregistrationFunction(guid)).toBe(true);

        eb.Deregister(guid);
        expect(eb._HasDeregistrationFunction(guid)).toBe(false);
    });
});