/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ChangeTemplateStatusRequestDto: core.serialization.ObjectSchema<
    serializers.ChangeTemplateStatusRequestDto.Raw,
    Novu.ChangeTemplateStatusRequestDto
> = core.serialization.object({
    active: core.serialization.boolean(),
});

export declare namespace ChangeTemplateStatusRequestDto {
    interface Raw {
        active: boolean;
    }
}
