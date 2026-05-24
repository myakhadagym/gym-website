Deno.serve(async (req) => {
  return new Response(
    JSON.stringify({ status: "NEW CODE RUNNING ✅" }),
    { headers: { "Content-Type": "application/json" } }
  );
});