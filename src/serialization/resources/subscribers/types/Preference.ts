/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const Preference: core.serialization.ObjectSchema<serializers.Preference.Raw, Novu.Preference> =
    core.serialization.object({
        enabled: core.serialization.boolean(),
        channels: core.serialization.lazyObject(async () => (await import("../../..")).PreferenceChannels),
    });

export declare namespace Preference {
    interface Raw {
        enabled: boolean;
        channels: serializers.PreferenceChannels.Raw;
    }
}
