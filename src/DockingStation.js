
class DockingStation {
  constructor(bikes) {
    this.bikes = []
  }
  
  release(bike) {
    if(this.bikes.length === 0) {
      throw new Error("No bikes available")
    }  
    this.bikes.pop()
  }
    
  dock(bike) {
    return this.bikes.push(bike)
  }

}