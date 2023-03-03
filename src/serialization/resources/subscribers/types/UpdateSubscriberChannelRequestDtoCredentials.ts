/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const UpdateSubscriberChannelRequestDtoCredentials: core.serialization.ObjectSchema<
    serializers.UpdateSubscriberChannelRequestDtoCredentials.Raw,
    Novu.UpdateSubscriberChannelRequestDtoCredentials
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).ChannelCredentials));

export declare namespace UpdateSubscriberChannelRequestDtoCredentials {
    interface Raw extends serializers.ChannelCredentials.Raw {}
}