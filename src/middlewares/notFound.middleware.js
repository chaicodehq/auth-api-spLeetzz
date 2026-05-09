/**
 * TODO: Handle 404 errors
 *
 * Return 404 with { error: { message: "Route not found" } }
 */
export function notFound(req, res) {
  return res.josn({ error: { message: "Route not found" } });
}
