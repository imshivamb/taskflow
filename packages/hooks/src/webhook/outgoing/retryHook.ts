import { sendHook } from "./sendHook";
import { WebhookPayload } from "../types";

export async function retryHook(url: string, payload: WebhookPayload, maxRetries = 3) {
    let retries = 0;
    if(retries < maxRetries) {
        try {
            return await sendHook(url, payload);
        } catch (error) {
            retries++;
      if (retries >= maxRetries) {
            throw error;
      }
            await new Promise(resolve => setTimeout(resolve, 1000 * retries));
    }
        }
        
    }
