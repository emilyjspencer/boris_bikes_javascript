
class DockingStation {
    
    
  constructor(capacity = 30) {
    this.bikes = []
    this.capacity = capacity
  };
  
  release(bike) {
    if(bike.works === false) {
        throw new Error("Unable to release bike")
      };
    if(this.bikes.length === 0) {
      throw new Error("No bikes available")
    };
    
    return this.bikes.pop()
  };
    
  dock(bike) {
    if(this.bikes.length >= 20) {
      throw new Error("Docking Station full")
    };
    return this.bikes.push(bike)
  };

  

};

