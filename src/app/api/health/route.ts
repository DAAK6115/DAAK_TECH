export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(
    { status: "ok", service: "DAAK_TECH" },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
