/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const MessageResponseDto: core.serialization.ObjectSchema<
    serializers.MessageResponseDto.Raw,
    Novu.MessageResponseDto
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string().optional()),
    templateId: core.serialization.property("_templateId", core.serialization.string()),
    environmentId: core.serialization.property("_environmentId", core.serialization.string()),
    messageTemplateId: core.serialization.property("_messageTemplateId", core.serialization.string()),
    organizationId: core.serialization.property("_organizationId", core.serialization.string()),
    notificationId: core.serialization.property("_notificationId", core.serialization.string()),
    subscriberId: core.serialization.property("_subscriberId", core.serialization.string()),
    subscriber: core.serialization.lazyObject(async () => (await import("../../..")).SubscriberResponseDto).optional(),
    template: core.serialization
        .lazyObject(async () => (await import("../../..")).NotificationTemplateResponse)
        .optional(),
    templateIdentifier: core.serialization.string().optional(),
    createdAt: core.serialization.string().optional(),
    content: core.serialization.lazy(async () => (await import("../../..")).MessageResponseDtoContent),
    transactionId: core.serialization.string(),
    channel: core.serialization.lazy(async () => (await import("../../..")).ChannelPreferenceType),
    seen: core.serialization.boolean(),
    email: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    directWebhookUrl: core.serialization.string().optional(),
    providerId: core.serialization.string().optional(),
    deviceTokens: core.serialization.list(core.serialization.string()).optional(),
    title: core.serialization.string().optional(),
    lastSeenDate: core.serialization.string(),
    cta: core.serialization.lazyObject(async () => (await import("../../..")).MessageCta),
    feedId: core.serialization.property("_feedId", core.serialization.string()),
    status: core.serialization.lazy(async () => (await import("../../..")).MessageResponseDtoStatus),
    errorId: core.serialization.string(),
    errorText: core.serialization.string(),
    payload: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    overrides: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    subject: core.serialization.string().optional(),
});

export declare namespace MessageResponseDto {
    interface Raw {
        _id?: string | null;
        _templateId: string;
        _environmentId: string;
        _messageTemplateId: string;
        _organizationId: string;
        _notificationId: string;
        _subscriberId: string;
        subscriber?: serializers.SubscriberResponseDto.Raw | null;
        template?: serializers.NotificationTemplateResponse.Raw | null;
        templateIdentifier?: string | null;
        createdAt?: string | null;
        content?: serializers.MessageResponseDtoContent.Raw;
        transactionId: string;
        channel: serializers.ChannelPreferenceType.Raw;
        seen: boolean;
        email?: string | null;
        phone?: string | null;
        directWebhookUrl?: string | null;
        providerId?: string | null;
        deviceTokens?: string[] | null;
        title?: string | null;
        lastSeenDate: string;
        cta: serializers.MessageCta.Raw;
        _feedId: string;
        status: serializers.MessageResponseDtoStatus.Raw;
        errorId: string;
        errorText: string;
        payload: Record<string, unknown>;
        overrides: Record<string, unknown>;
        subject?: string | null;
    }
}
