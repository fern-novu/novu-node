/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const NotificationStepMetadata: core.serialization.ObjectSchema<
    serializers.NotificationStepMetadata.Raw,
    Novu.NotificationStepMetadata
> = core.serialization.object({
    amount: core.serialization.number().optional(),
    unit: core.serialization.lazy(async () => (await import("../../..")).NotificationStepMetadataUnit).optional(),
    digestKey: core.serialization.string().optional(),
    delayPath: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).NotificationStepMetadataType),
    backoffUnit: core.serialization
        .lazy(async () => (await import("../../..")).NotificationStepMetadataBackofUnit)
        .optional(),
    backoffAmount: core.serialization.number().optional(),
    updateMode: core.serialization.boolean().optional(),
});

export declare namespace NotificationStepMetadata {
    interface Raw {
        amount?: number | null;
        unit?: serializers.NotificationStepMetadataUnit.Raw | null;
        digestKey?: string | null;
        delayPath?: string | null;
        type: serializers.NotificationStepMetadataType.Raw;
        backoffUnit?: serializers.NotificationStepMetadataBackofUnit.Raw | null;
        backoffAmount?: number | null;
        updateMode?: boolean | null;
    }
}