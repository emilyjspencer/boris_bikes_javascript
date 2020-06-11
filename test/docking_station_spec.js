describe('DockingStation', function() {

    var dockingstation;

    describe('docking station can release a bike', function() {
      it ('can release a working bike', function() {
        dockingstation = new DockingStation()
        bike = new Bike()
        expect(dockingstation.release(bike)).toEqual(bike)
      });


    });
    

});