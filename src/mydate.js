function myDate(date) {
    // Check if the input is a valid Date object
    if (!(date instanceof Date)) {
      throw new TypeError('Input must be a Date object');
    }
  
    // Get individual components of the date
    const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if < 10
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, add 1
    const year = date.getFullYear();
  
    // Format the date in desired format
    return `${day}/${month}/${year}`;
  }

  export default myDate;
  