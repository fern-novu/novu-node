/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const ActivitiesResponseDto: core.serialization.ObjectSchema<
    serializers.ActivitiesResponseDto.Raw,
    Novu.ActivitiesResponseDto
> = core.serialization.object({
    totalCount: core.serialization.number(),
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ActivityNotificationResponseDto)
    ),
    pageSize: core.serialization.number(),
    page: core.serialization.number(),
});

export declare namespace ActivitiesResponseDto {
    interface Raw {
        totalCount: number;
        data: serializers.ActivityNotificationResponseDto.Raw[];
        pageSize: number;
        page: number;
    }
}
