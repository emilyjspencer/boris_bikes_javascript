
describe('Bike', function() {
  
  var bike;

    it('the bike works', function() {
      bike = new Bike();
      expect(bike.working()).toEqual(true);
    })
  })
