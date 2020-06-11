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
        dockingstation.release(bike)
        expect(dockingstation.bikes).toEqual([])
      });

      it('raises an error when there are no bikes available', function() {
        expect(function() { dockingstation.release(bike); }).toThrowError('No bikes available');
      });

      it('raises an error if the bike to be released is broken', function() {
        bike.break()
        expect(function() { dockingstation.release(bike); }).toThrowError('Unable to release bike')
      });

    });


    describe('dock', function() {
      it('can dock a bike', function() {
        dockingstation.dock(bike)
        expect(dockingstation.bikes.length).toEqual(1)
      })


      it('raises an error when full', function() {
        for(let step = 0; step < 20; step++) {
          dockingstation.dock(bike)
        }
        expect(function() { dockingstation.dock(bike); }).toThrowError('Docking Station full');
      });

    })
    
    describe('capacity', function() {
      it( 'has a default capacity that can be overwritten', function() {
        let testdockingstation = new DockingStation(30)
        expect(dockingstation.capacity).toEqual(30)
      })
    })
  

});