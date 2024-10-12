import axios from 'axios';
import FormData from 'form-data';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload image to Pomf2
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/png`
 * - `image/webp`
 * - `video/mp4`
 * - `video/avi`
 * - `video/mkv`
 * - `audio/mpeg`
 * - `audio/wav`
 * - `audio/ogg`
 */

export default async (buffer, lann) => {
  const { ext, mime } = (await fileTypeFromBuffer(buffer)) || {
    ext: "bin",
    mime: "application/octet-stream"
  };

  const form = new FormData();
  const fileName = `upload_${Date.now()}.${ext || "bin"}`;
  form.append("files[]", buffer, { filename: fileName, contentType: mime });

  try {
    const { data } = await axios.post("https://pomf2.lain.la/upload.php", form, {
      headers: form.getHeaders(),
    });

    if (!data.success) {
      throw new Error(`Upload failed: ${data.error || 'Unknown error'}`);
    }

    console.log("Uploaded to Pomf2 successfully!");
    return data.files[0]?.url;
  } catch (error) {
    throw error;
  }
};
