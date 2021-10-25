export function listHours(from, to) {
    const hours = [];
    for (let i = from/60; i < to/60; i++) {
        let hr = i%12 === 0 ? 12 : i%12;
        hours.push(`${hr}${i>12 ? 'pm' : 'am'}`);
    }
    return hours;
}