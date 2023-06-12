
export function getCurrentDate() {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth();
  // let year = newDate.getFullYear();
  var currentMonth = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  return `${currentMonth[month]}, ${date}`
}


export function getCurrentDay() {

  let newDate = new Date()
  let day = newDate.getDay();
  
  var currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return currentDay[day]
}