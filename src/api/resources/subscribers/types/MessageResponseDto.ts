/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface MessageResponseDto {
    id?: string;
    templateId: string;
    environmentId: string;
    messageTemplateId: string;
    organizationId: string;
    notificationId: string;
    subscriberId: string;
    subscriber?: Novu.SubscriberResponseDto;
    template?: Novu.NotificationTemplateResponse;
    templateIdentifier?: string;
    createdAt?: string;
    content?: Novu.MessageResponseDtoContent;
    transactionId: string;
    channel: Novu.MessageResponseDtoChannel;
    seen: boolean;
    email?: string;
    phone?: string;
    directWebhookUrl?: string;
    providerId?: string;
    deviceTokens?: string[];
    title?: string;
    lastSeenDate: string;
    cta: Novu.MessageCta;
    feedId: string;
    status: Novu.MessageResponseDtoStatus;
    errorId: string;
    errorText: string;
    /** The payload that was used to send the notification trigger */
    payload: Record<string, unknown>;
    /** Provider specific overrides used when triggering the notification */
    overrides: Record<string, unknown>;
    subject?: string;
}