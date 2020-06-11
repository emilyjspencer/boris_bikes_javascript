
describe('Bike', function() {
  
  var bike;
   
    describe('working', function() {
      it('by default the bike works', function() {
        bike = new Bike();
        expect(bike.works).toEqual(true);
      })

      it('can also break', function() {
        bike = new Bike();
        bike.break()
        expect(bike.works).toEqual(false);
      });
    });


    describe('report_broken', function() {
      it('can be reported as broken if it is broken', function() {
        bike = new Bike()
        bike.break()
        expect(bike.report_broken()).toEqual("Bike has been reported as broken")
      });

      it('cannot be report as broken if it is not broken', function() {
        bike = new Bike()
        expect(function() { bike.report_broken(); }).toThrowError('Unable to report as broken. Bike is not broken');
      });
    });

  });
