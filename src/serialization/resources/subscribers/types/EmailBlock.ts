/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const EmailBlock: core.serialization.ObjectSchema<serializers.EmailBlock.Raw, Novu.EmailBlock> =
    core.serialization.object({
        type: core.serialization.lazy(async () => (await import("../../..")).EmailBlockType),
        content: core.serialization.string(),
        url: core.serialization.string().optional(),
        styles: core.serialization.lazyObject(async () => (await import("../../..")).EmailBlockStyles).optional(),
    });

export declare namespace EmailBlock {
    interface Raw {
        type: serializers.EmailBlockType.Raw;
        content: string;
        url?: string | null;
        styles?: serializers.EmailBlockStyles.Raw | null;
    }
}
