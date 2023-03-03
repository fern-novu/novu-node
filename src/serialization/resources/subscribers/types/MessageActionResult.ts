/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const MessageActionResult: core.serialization.ObjectSchema<
    serializers.MessageActionResult.Raw,
    Novu.MessageActionResult
> = core.serialization.object({
    payload: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).MessageActionResultType).optional(),
});

export declare namespace MessageActionResult {
    interface Raw {
        payload?: Record<string, unknown> | null;
        type?: serializers.MessageActionResultType.Raw | null;
    }
}
