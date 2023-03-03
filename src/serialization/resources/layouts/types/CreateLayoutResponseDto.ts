/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const CreateLayoutResponseDto: core.serialization.ObjectSchema<
    serializers.CreateLayoutResponseDto.Raw,
    Novu.CreateLayoutResponseDto
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string()),
});

export declare namespace CreateLayoutResponseDto {
    interface Raw {
        _id: string;
    }
}