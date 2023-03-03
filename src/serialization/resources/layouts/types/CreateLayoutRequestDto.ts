/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const CreateLayoutRequestDto: core.serialization.ObjectSchema<
    serializers.CreateLayoutRequestDto.Raw,
    Novu.CreateLayoutRequestDto
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    content: core.serialization.string(),
    variables: core.serialization
        .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()))
        .optional(),
    isDefault: core.serialization.boolean().optional(),
});

export declare namespace CreateLayoutRequestDto {
    interface Raw {
        name: string;
        description?: string | null;
        content: string;
        variables?: Record<string, unknown>[] | null;
        isDefault?: boolean | null;
    }
}
