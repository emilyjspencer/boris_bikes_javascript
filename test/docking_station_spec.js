describe('DockingStation', function() {

    var dockingstation;

    describe('release', function() {
      it ('can release a working bike', function() {
        dockingstation = new DockingStation()
        bike = new Bike()
        expect(dockingstation.release(bike)).toEqual(bike)
      });


    });


    describe('dock', function() {
      it('can dock a bike', function() {
        dockingstation = new DockingStation()
        bike = new Bike()
        expect(dockingstation.dock(bike)).toEqual(bike)
      })
    })
    

});