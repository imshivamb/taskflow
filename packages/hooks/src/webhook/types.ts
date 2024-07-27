import { PrismaClient } from "../../../database/src";

export interface WebhookPayload {
    [key: string]: any;
}

export interface StreamRunData {
    streamId: string;
    metadata: WebhookPayload;
}

export interface DatabaseClient extends PrismaClient {}