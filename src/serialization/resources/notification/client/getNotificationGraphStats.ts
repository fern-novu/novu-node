/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.notification.getNotificationGraphStats.Response.Raw,
    Novu.ActivityGraphStatesResponse[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).ActivityGraphStatesResponse)
);

export declare namespace Response {
    type Raw = serializers.ActivityGraphStatesResponse.Raw[];
}
