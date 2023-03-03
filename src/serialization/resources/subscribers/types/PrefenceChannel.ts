/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const PrefenceChannel: core.serialization.ObjectSchema<serializers.PrefenceChannel.Raw, Novu.PrefenceChannel> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).PreferenceChannels));

export declare namespace PrefenceChannel {
    interface Raw extends serializers.PreferenceChannels.Raw {}
}