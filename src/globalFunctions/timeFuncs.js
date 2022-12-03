
export function getCurrentTime() {
const date = new Date();
let isoDate=date.toISOString()
return isoDate
}