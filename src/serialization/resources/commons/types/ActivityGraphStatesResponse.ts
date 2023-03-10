/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ActivityGraphStatesResponse: core.serialization.ObjectSchema<
    serializers.ActivityGraphStatesResponse.Raw,
    Novu.ActivityGraphStatesResponse
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string()),
    count: core.serialization.number(),
    templates: core.serialization.list(core.serialization.string()),
    channels: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../..")).ChannelPreferenceType)
    ),
});

export declare namespace ActivityGraphStatesResponse {
    interface Raw {
        _id: string;
        count: number;
        templates: string[];
        channels: serializers.ChannelPreferenceType.Raw[];
    }
}
