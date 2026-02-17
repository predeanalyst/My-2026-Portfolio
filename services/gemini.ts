
import { GoogleGenAI } from "@google/genai";

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Extract base64 data without the prefix (e.g., data:image/png;base64,...)
    const imageData = base64Image.split(',')[1] || base64Image;
    const mimeType = base64Image.match(/^data:(.*);base64/)?.[1] || 'image/png';

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageData,
              mimeType: mimeType,
            },
          },
          {
            text: `Carefully edit this image based on the following instruction: "${prompt}". Return only the edited image.`,
          },
        ],
      },
    });

    // Find the image part in candidates
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error('No image was returned from the AI.');
  } catch (error) {
    console.error('Error in editImageWithGemini:', error);
    throw error;
  }
};
