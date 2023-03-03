/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ExecutionDetailsResponseDtoChannel: core.serialization.Schema<
    serializers.ExecutionDetailsResponseDtoChannel.Raw,
    Novu.ExecutionDetailsResponseDtoChannel
> = core.serialization.enum_(["in_app", "email", "sms", "chat", "push", "digest", "trigger", "delay"]);

export declare namespace ExecutionDetailsResponseDtoChannel {
    type Raw = "in_app" | "email" | "sms" | "chat" | "push" | "digest" | "trigger" | "delay";
}
