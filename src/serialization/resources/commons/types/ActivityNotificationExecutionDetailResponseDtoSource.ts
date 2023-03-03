/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ActivityNotificationExecutionDetailResponseDtoSource: core.serialization.Schema<
    serializers.ActivityNotificationExecutionDetailResponseDtoSource.Raw,
    Novu.ActivityNotificationExecutionDetailResponseDtoSource
> = core.serialization.enum_(["Credentials", "Internal", "Payload", "Webhook"]);

export declare namespace ActivityNotificationExecutionDetailResponseDtoSource {
    type Raw = "Credentials" | "Internal" | "Payload" | "Webhook";
}
