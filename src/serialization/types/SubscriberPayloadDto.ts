/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Novu } from "@fern-api/novu";
import * as core from "../../core";

export const SubscriberPayloadDto: core.serialization.ObjectSchema<
    serializers.SubscriberPayloadDto.Raw,
    Novu.SubscriberPayloadDto
> = core.serialization.object({
    firstName: core.serialization.string().optional(),
    lastName: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
    avatar: core.serialization.string().optional(),
    locale: core.serialization.string().optional(),
});

export declare namespace SubscriberPayloadDto {
    interface Raw {
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
        phone?: string | null;
        avatar?: string | null;
        locale?: string | null;
    }
}