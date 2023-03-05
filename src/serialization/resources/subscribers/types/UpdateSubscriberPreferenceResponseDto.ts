/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const UpdateSubscriberPreferenceResponseDto: core.serialization.ObjectSchema<
    serializers.UpdateSubscriberPreferenceResponseDto.Raw,
    Novu.UpdateSubscriberPreferenceResponseDto
> = core.serialization.object({
    template: core.serialization.lazyObject(async () => (await import("../../..")).TemplateResponse),
    preference: core.serialization.lazyObject(async () => (await import("../../..")).Preference),
});

export declare namespace UpdateSubscriberPreferenceResponseDto {
    interface Raw {
        template: serializers.TemplateResponse.Raw;
        preference: serializers.Preference.Raw;
    }
}
