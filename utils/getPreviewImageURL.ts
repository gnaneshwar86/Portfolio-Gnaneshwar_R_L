import axios from "axios";
import lqip from "lqip-modern";
import path from "path";
import fs from "fs";

// Transparent 1×1 GIF — used as instant fallback
const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// Module-level cache persists across requests in the same server session
const cache = new Map<string, string>();

const getPreviewImageUrl = async (url: string): Promise<string> => {
  // Return placeholder immediately in development to skip expensive processing
  if (process.env.NODE_ENV === "development") {
    return PLACEHOLDER;
  }

  if (cache.has(url)) {
    return cache.get(url) as string;
  }

  let buffer: Buffer;

  try {
    if (url.startsWith("http")) {
      const { data } = await axios.get(url, {
        responseType: "arraybuffer",
        timeout: 5000,
      });
      buffer = data;
    } else {
      const filePath = path.join(process.cwd(), "public", url);
      if (!fs.existsSync(filePath)) {
        return PLACEHOLDER;
      }
      buffer = fs.readFileSync(filePath);
    }

    const previewImage = await lqip(buffer);
    const result = previewImage.metadata.dataURIBase64;
    cache.set(url, result);
    return result;
  } catch {
    // Cache the failure too so we don't retry on every request
    cache.set(url, PLACEHOLDER);
    return PLACEHOLDER;
  }
};

export default getPreviewImageUrl;
