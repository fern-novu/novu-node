/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ChannelPreference: core.serialization.ObjectSchema<
    serializers.ChannelPreference.Raw,
    Novu.ChannelPreference
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).ChannelPreferenceType),
    enabled: core.serialization.boolean(),
});

export declare namespace ChannelPreference {
    interface Raw {
        type: serializers.ChannelPreferenceType.Raw;
        enabled: boolean;
    }
}
