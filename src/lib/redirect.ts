import type { APIRoute } from "astro";

// 301 redirect for old Google Sites URLs. Used by on-demand routes
// (prerender = false), so the Worker answers with a real 301 status.
export function permanentRedirect(to: string): APIRoute {
	return ({ redirect }) => redirect(to, 301);
}
