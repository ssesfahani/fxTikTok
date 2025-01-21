export const returnHTMLResponse = (content: string, status?: number, noCache?: boolean): Response => {
  return new Response(content, {
    status: status || 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': noCache ? 'no-store' : 'public, max-age=3600'
    }
  })
}
