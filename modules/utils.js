// Node.js function to return the date of Monday of the current week in ISO string format

export function getMondayOfCurrentWeek() {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
  const monday = new Date(today.setDate(diff));
  return monday.toISOString();
}

// Node.js function to return the last day (Sunday) of the current week at 22:00 in ISO string format

export function getLastDayOfCurrentWeek() {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + 7; // move to next Sunday
  const lastDay = new Date(today.setDate(diff));
  lastDay.setHours(22, 0, 0, 0); // set time to 22:00
  return lastDay.toISOString();
}

// Node.js function to return yesterday at 22:00 in ISO string format

export function getYesterdayAt22() {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  yesterday.setHours(24, 0, 0, 0); // set time to 22:00
  return yesterday.toISOString();
}

export function getTodayAt215959() {
  const today = new Date();
  today.setHours(23, 59, 59, 999); // set time to 21:59:59
  return today.toISOString();
}

export function getTodayAt22() {
    const today = new Date();
    today.setHours(24, 0, 0, 0); // set time to 21:59:59
    return today.toISOString();
  }

export function getTomorowAt2190() {
    const today = new Date();
    const tomorow = new Date(today.setDate(today.getDate() +1));
    tomorow.setHours(23, 59, 59, 999); // set time to 21:59:59
    return tomorow.toISOString();
}

export function get2DaysStart() {
    const today = new Date();
    const tomorow = new Date(today.setDate(today.getDate() + 1));
    tomorow.setHours(24, 0, 0, 0);; // set time to 21:59:59
    return tomorow.toISOString();
}

export function get2DaysEnd() {
    const today = new Date();
    const tomorow = new Date(today.setDate(today.getDate() + 2));
    tomorow.setHours(23, 59, 59, 999); // set time to 21:59:59
    return tomorow.toISOString();
}

export function getTime(iso_date_str) {
  const [day, month_date, year, hour] = (
    new Date(iso_date_str).toLocaleDateString('en', {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    .split(/,\s?/)
  );
  return {
    day,
    hour,
    date: month_date + ', ' + year
  };
}