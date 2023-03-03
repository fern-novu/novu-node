/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ActivityNotificationResponseDto: core.serialization.ObjectSchema<
    serializers.ActivityNotificationResponseDto.Raw,
    Novu.ActivityNotificationResponseDto
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string().optional()),
    environmentId: core.serialization.property("_environmentId", core.serialization.string()),
    organizationId: core.serialization.property("_organizationId", core.serialization.string()),
    transactionId: core.serialization.string(),
    createdAt: core.serialization.string().optional(),
    channels: core.serialization
        .lazy(async () => (await import("../../..")).ActivityNotificationResponseDtoChannels)
        .optional(),
    subscriber: core.serialization
        .lazyObject(async () => (await import("../../..")).ActivityNotificationSubscriberResponseDto)
        .optional(),
    template: core.serialization
        .lazyObject(async () => (await import("../../..")).ActivityNotificationTemplateResponseDto)
        .optional(),
    jobs: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ActivityNotificationJobResponseDto))
        .optional(),
});

export declare namespace ActivityNotificationResponseDto {
    interface Raw {
        _id?: string | null;
        _environmentId: string;
        _organizationId: string;
        transactionId: string;
        createdAt?: string | null;
        channels?: serializers.ActivityNotificationResponseDtoChannels.Raw | null;
        subscriber?: serializers.ActivityNotificationSubscriberResponseDto.Raw | null;
        template?: serializers.ActivityNotificationTemplateResponseDto.Raw | null;
        jobs?: serializers.ActivityNotificationJobResponseDto.Raw[] | null;
    }
}