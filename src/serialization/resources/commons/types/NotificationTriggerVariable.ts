/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const NotificationTriggerVariable: core.serialization.ObjectSchema<
    serializers.NotificationTriggerVariable.Raw,
    Novu.NotificationTriggerVariable
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace NotificationTriggerVariable {
    interface Raw {
        name: string;
    }
}