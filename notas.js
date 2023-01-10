// const moreNumbers = (a,b,c) => {
//   setTimeout(() => {
//       riseDouble(a,b,c);
//   }, 3000)
//   return a
// };

// async function syncNumbers2(x,x1,x2) {
//   const risedNumbers2 = await moreNumbers(x,x1,x2);
//   console.log(risedNumbers2);
// };

// syncNumbers2(10,20,30);

// ////////////////////////////////

class UfoProtocol {
  constructor() {

    this.name = "UFO Protocol";
    if (this.constructor === UfoProtocol) {
      throw new Error("Should be initiated in case of UFO sighting");
    }
  }
  displayName() { return "The flying thing is" + this.sight; }
};
  
  
  function sighting (flyingThing) {
    this.sight = flyingThing;
  }
;
  
  sighting.prototype = Object.create(UfoProtocol.prototype)
  
  let newFlyingThing1 = new Sighting("just an airplane")
  console.log(newFlyingThing1.displayName());
  
  let newFlyingThing2 = new Sighting("not an airplane, start the UFO protocol.")
  console.log(newFlyingThing2.displayName());