const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export async function GET() {
  try {
    if (!INSTAGRAM_BUSINESS_ACCOUNT_ID || !INSTAGRAM_ACCESS_TOKEN) {
      return Response.json(
        {
          error: "Missing Instagram credentials",
          message: "Set INSTAGRAM_BUSINESS_ACCOUNT_ID and INSTAGRAM_ACCESS_TOKEN in .env.local",
        },
        { status: 500 }
      );
    }

    // Fetch media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Filter only reels and map to our format
    const reels = data.data
      ?.filter((media) => media.media_type === "CAROUSEL" || media.media_type === "VIDEO")
      ?.slice(0, 5) // Ambil 5 teratas
      ?.map((media, index) => ({
        id: index + 1,
        title: media.caption?.split("\n")[0]?.substring(0, 50) || `Reel ${index + 1}`,
        image: media.media_url,
        url: `https://www.instagram.com/p/${media.id.split("_")[0]}/`,
        timestamp: media.timestamp,
      }));

    return Response.json({
      success: true,
      data: reels || [],
    });
  } catch (error) {
    console.error("Instagram API error:", error);
    return Response.json(
      {
        error: "Failed to fetch Instagram reels",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
