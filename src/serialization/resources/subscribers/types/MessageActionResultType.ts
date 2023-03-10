/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const MessageActionResultType: core.serialization.Schema<
    serializers.MessageActionResultType.Raw,
    Novu.MessageActionResultType
> = core.serialization.enum_(["primary", "secondary", "clicked"]);

export declare namespace MessageActionResultType {
    type Raw = "primary" | "secondary" | "clicked";
}
