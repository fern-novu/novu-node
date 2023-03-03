/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const MarkMessageFields: core.serialization.ObjectSchema<
    serializers.MarkMessageFields.Raw,
    Novu.MarkMessageFields
> = core.serialization.object({
    seen: core.serialization.boolean().optional(),
    read: core.serialization.boolean().optional(),
});

export declare namespace MarkMessageFields {
    interface Raw {
        seen?: boolean | null;
        read?: boolean | null;
    }
}