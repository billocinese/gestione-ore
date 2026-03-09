import { neon } from "@netlify/neon";

export async function handler(event) {

  const sql = neon();

  const data = JSON.parse(event.body);

  await sql`
    INSERT INTO ore_lavoro (dipendente,data,ore,mese)
    VALUES (${data.dipendente},${data.data},${data.ore},${data.mese})
  `;

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
}