/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const CreateSubscriberRequestDto: core.serialization.ObjectSchema<
    serializers.CreateSubscriberRequestDto.Raw,
    Novu.CreateSubscriberRequestDto
> = core.serialization.object({
    subscriberId: core.serialization.string(),
    email: core.serialization.string().optional(),
    firstName: core.serialization.string().optional(),
    lastName: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    avatar: core.serialization.string().optional(),
    locale: core.serialization.string().optional(),
    data: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace CreateSubscriberRequestDto {
    interface Raw {
        subscriberId: string;
        email?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        phone?: string | null;
        avatar?: string | null;
        locale?: string | null;
        data?: Record<string, unknown> | null;
    }
}
