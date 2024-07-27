import axios from "axios";
import { WebhookPayload } from "../types";

export async function sendHook(url: string, payload: WebhookPayload) {
    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error('Error sending webhook:', error);
        throw error;
    }
}