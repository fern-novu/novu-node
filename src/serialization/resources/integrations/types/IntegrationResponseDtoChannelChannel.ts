/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const IntegrationResponseDtoChannelChannel: core.serialization.Schema<
    serializers.IntegrationResponseDtoChannelChannel.Raw,
    Novu.IntegrationResponseDtoChannelChannel
> = core.serialization.enum_(["in_app", "email", "sms", "chat", "push"]);

export declare namespace IntegrationResponseDtoChannelChannel {
    type Raw = "in_app" | "email" | "sms" | "chat" | "push";
}
