export async function startVisit() {
  const res = await fetch("/api/visits", { method: "POST" });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const { visited_at } = await res.json();
  return new Date(visited_at);
}
