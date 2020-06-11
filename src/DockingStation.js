
class DockingStation {
  constructor(bikes) {
    this.bikes = []
  }
  
  release(bike) {
    if(this.bikes.length === 0) {
      throw new Error("No bikes available")
    }  
    return this.bikes.pop()
  }
    
  dock(bike) {
    if(this.bikes.length === 20) {
      throw new Error("Docking Station full")
    }
    return this.bikes.push(bike)
  }

}