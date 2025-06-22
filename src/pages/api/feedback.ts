export const prerender = false;

import type { APIRoute } from "astro";
import { sql } from "../../lib/neon";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { score, message, name } = await request.json();

    // Validaciones
    if (
      typeof score !== "number" ||
      score < 1 ||
      score > 10 ||
      typeof message !== "string" ||
      !message.trim() ||
      typeof name !== "string" ||
      !name.trim()
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Payload inválido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Inserción en la tabla feedback
    const insertResult = await sql`
      INSERT INTO feedback (score, message, name)
      VALUES (${score}, ${message.trim()}, ${name.trim()})
      RETURNING id, created_at
    `;
    const inserted = insertResult[0];

    return new Response(JSON.stringify({ success: true, feedback: inserted }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error en POST /api/feedback", e);
    return new Response(
      JSON.stringify({ success: false, error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
