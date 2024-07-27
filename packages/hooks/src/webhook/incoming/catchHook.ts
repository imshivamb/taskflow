import {Request, Response } from "express";
import { DatabaseClient, StreamRunData } from "../types";

export async function catchHook(req: Request, res: Response, client: DatabaseClient) {
    const userId = req.params.userId;
    const streamId = req.params.streamId;
    const body = req.body;

    try {
        await client.$transaction(async (tx) => {
            const run = await tx.streamRun.create({
                data: {
                    streamId: streamId,
                    metadata: body
                }
            });
            await tx.streamRunQueueBox.create({
                data: {
                    streamRunId: run.id
                }
            })
        });
        res.json({
            message: "Webhook Received"
        })
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).json({
        message: "Error processing webhook",
    });
    }
}