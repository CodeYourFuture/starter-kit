import db from "../db";

export async function create(visited_at) {
  const { rows: [visit] } = await db.query(
    "INSERT INTO visits (visited_at) VALUES ($1) RETURNING *",
    [visited_at],
  );
  return visit;
}
