import { generateVideo } from "../services/kling.js";
export async function generateAndWait(req, res) {
    try {

        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: "Prompt requerido"
            });
        }

        const result = await generateVideo(prompt);

        const videoUrl =
            result?.data?.video?.url ||
            result?.video?.url ||
            null;

        res.json({
            success: true,
            prompt,
            videoUrl
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }
}