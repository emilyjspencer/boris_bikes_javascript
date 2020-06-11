class Bike {
  constructor () {
    this.works = true
  }

    working() {
      return this.works = true;
    }

    break() {
      return this.works = false;
    }

    report_broken() {
      if(this.works === true) {
            throw new Error("Unable to report as broken. Bike is not broken")
          }  
      return "Bike has been reported as broken"
    }
}

