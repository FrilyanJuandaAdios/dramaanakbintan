const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydBmE_eZjhVpq5KZ8gTB-hC6rb1Nlc673gtI7Q67ShuOweUoT81UkhffkaRJIlL9Mysw/exec";

export async function POST(request) {
  try {
    const body = await request.text();

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    });

    const text = await response.text();
    const contentType = response.headers.get("content-type") || "";
    const isHtml = /text\/html/.test(contentType) || /<html/i.test(text);

    if (!response.ok || isHtml) {
      return new Response(JSON.stringify({ error: text || "Gagal mengirim data." }), {
        status: response.ok ? 500 : response.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify({ success: true, message: text || "Terkirim" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
