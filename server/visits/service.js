import * as visits from "./repository";

export async function trackVisit() {
  return visits.create(new Date());
}
