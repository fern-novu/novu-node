/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ChannelPreferenceType: core.serialization.Schema<
    serializers.ChannelPreferenceType.Raw,
    Novu.ChannelPreferenceType
> = core.serialization.enum_(["in_app", "email", "sms", "chat", "push"]);

export declare namespace ChannelPreferenceType {
    type Raw = "in_app" | "email" | "sms" | "chat" | "push";
}
