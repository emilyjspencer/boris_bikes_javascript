
class DockingStation {
  constructor(bikes) {
    this.bikes = []
  }
  
  release(bike) {
    return bike 
  }
    
  dock(bike) {
    return this.bikes.push(bike)
  }

}