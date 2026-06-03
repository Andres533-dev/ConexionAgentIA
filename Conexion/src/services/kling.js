import fal from "../config/fal.js";

export async function generateVideo(prompt) {
    return await fal.subscribe(
        "fal-ai/kling-video/v3/standard/text-to-video",
        {
            input: {
                prompt,
                duration: 10,
                generate_audio: true
            }
        }
    );
}