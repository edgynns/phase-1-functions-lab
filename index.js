
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Headquarters is on 42nd Street
    return Math.abs(pickupLocation - hqLocation); // Absolute value ensures distance is always positive
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Reuse the previous function
    const feetPerBlock = 264; // Each block is 264 feet long
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Each block is 264 feet long
    return Math.abs(destination - start) * feetPerBlock; // Absolute value ensures positive distance
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Reuse the previous function
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // No rides over 2500 feet
    }
  }