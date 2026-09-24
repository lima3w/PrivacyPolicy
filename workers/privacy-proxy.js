const PUBLIC_PREFIX = "/privacy";
const PAGES_ORIGIN = "https://privacy-policy-88r.pages.dev";

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);

    if (requestUrl.pathname === PUBLIC_PREFIX) {
      return Response.redirect(`${requestUrl.origin}${PUBLIC_PREFIX}/`, 301);
    }

    if (!requestUrl.pathname.startsWith(`${PUBLIC_PREFIX}/`)) {
      return new Response("Not found", { status: 404 });
    }

    // The Zola site is built at the Pages origin root, while public links use
    // /privacy on lima3.dev. Remove only that public prefix before proxying.
    const upstreamUrl = new URL(
      `${requestUrl.pathname.slice(PUBLIC_PREFIX.length)}${requestUrl.search}`,
      PAGES_ORIGIN
    );

    return fetch(new Request(upstreamUrl, request));
  }
};
