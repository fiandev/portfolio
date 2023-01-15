
export default function countdown (timeStart, timeEnd) {
  if ( !timeStart instanceof Date || !timeEnd instanceof Date ) throw new Error("arguments must be instance of 'Date' class");
  
  let distance = timeStart - timeEnd;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let years = Math.floor(days / 365.25);
  
  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    years: years,
    distance: distance
  }
}