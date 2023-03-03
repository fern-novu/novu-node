/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const UpdateSubscriberPreferenceRequestDto: core.serialization.ObjectSchema<
    serializers.UpdateSubscriberPreferenceRequestDto.Raw,
    Novu.UpdateSubscriberPreferenceRequestDto
> = core.serialization.object({
    channel: core.serialization.lazyObject(async () => (await import("../../..")).ChannelPreference).optional(),
    enabled: core.serialization.boolean().optional(),
});

export declare namespace UpdateSubscriberPreferenceRequestDto {
    interface Raw {
        channel?: serializers.ChannelPreference.Raw | null;
        enabled?: boolean | null;
    }
}
