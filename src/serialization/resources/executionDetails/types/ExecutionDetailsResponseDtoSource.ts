/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ExecutionDetailsResponseDtoSource: core.serialization.Schema<
    serializers.ExecutionDetailsResponseDtoSource.Raw,
    Novu.ExecutionDetailsResponseDtoSource
> = core.serialization.enum_(["Credentials", "Internal", "Payload", "Webhook"]);

export declare namespace ExecutionDetailsResponseDtoSource {
    type Raw = "Credentials" | "Internal" | "Payload" | "Webhook";
}
