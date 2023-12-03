import { saveToFiles } from "@/app/utils/saveToFile";
import { NextResponse, NextRequest } from "next/server";
import querystring from "node:querystring";

export async function GET(req: NextRequest, res: NextResponse) {
    // spotify.comt?code=''
    const params = req.nextUrl.searchParams;
    const code = params.get("code") || null;
    console.log(
        code,
        "-----\n",
        "Basic " +
            Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
            ).toString("base64"),
    );

    if (code) {
        const data = querystring.stringify({
            code,
            redirect_uri: "http://localhost:3000/api/spotify/callback",
            grant_type: "authorization_code",
        });

        console.log("encoded data ===> ", data);
        const response = await global.fetch(
            "https://accounts.spotify.com/api/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Basic " +
                        Buffer.from(
                            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
                        ).toString("base64"),
                },
                body: data,
            },
        );

        const { access_token, refresh_token } = await response.json();
        process.env.SPOTIFY_ACCESS_TOKEN = access_token;
        process.env.SPOTIFY_REFRESH_TOKEN = refresh_token;

        await saveToFiles();
        return NextResponse.redirect(req.nextUrl.origin);
    } else {
        return NextResponse.redirect(
            "/#" +
                querystring.stringify({
                    error: "spotify_api_failed",
                }),
        );
    }
}