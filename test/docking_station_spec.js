describe('DockingStation', function() {

    var dockingstation;
    var bike;

    beforeEach(function() {
      dockingstation = new DockingStation()
      bike = new Bike()
    });

    describe('release', function() {
      it ('can release a working bike', function() {
        dockingstation.dock(bike)
        expect(dockingstation.release(bike)).toEqual(bike)
      });

      it('raises an error when there are no bikes available', function() {
        expect(function() { dockingstation.release(bike); }).toThrowError('No bikes available');
      });

    });


    describe('dock', function() {
      it('can dock a bike', function() {
        dockingstation.dock(bike)
        expect(dockingstation.bikes.length).toEqual(1)
      })
    })
    

});