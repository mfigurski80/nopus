export function scheduleByDay(schedule) {
  const scheduleByDay = [[],[],[],[],[]];
  schedule.forEach((event, i) => { // for each event
    event.days.forEach(day => { // for each day of the event
        scheduleByDay[day].push(i); // push
    });
  });
  return scheduleByDay;
}