/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const UpdateLayoutRequestDto: core.serialization.ObjectSchema<
    serializers.UpdateLayoutRequestDto.Raw,
    Novu.UpdateLayoutRequestDto
> = core.serialization.object({
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    content: core.serialization.string().optional(),
    variables: core.serialization
        .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()))
        .optional(),
    isDefault: core.serialization.boolean().optional(),
});

export declare namespace UpdateLayoutRequestDto {
    interface Raw {
        name?: string | null;
        description?: string | null;
        content?: string | null;
        variables?: Record<string, unknown>[] | null;
        isDefault?: boolean | null;
    }
}
