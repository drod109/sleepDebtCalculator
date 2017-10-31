const getSleepHours = (day) => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 6;
  } else if (day === 'Thursday') {
    return 5;
  } else if (day === 'Friday') {
    return 4;
  } else if (day === 'Saturday') {
    return 3;
  } else if (day === 'Sunday') {
    return 2;
  }  
};

const getActualSleepHours = () => {
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday') ;
}

const getIdealSleepHours = () => {
  let idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('The user has received the require amount of sleep');
  } 
  if (actualSleepHours > idealSleepHours) {
    console.log('The user has received more than the required amount of sleep');
  } 
  if (actualSleepHours < idealSleepHours) {
    console.log('The user should try and get more rest');
  }
};

calculateSleepDebt();
