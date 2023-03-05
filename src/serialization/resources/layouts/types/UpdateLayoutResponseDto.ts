/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const UpdateLayoutResponseDto: core.serialization.ObjectSchema<
    serializers.UpdateLayoutResponseDto.Raw,
    Novu.UpdateLayoutResponseDto
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string().optional()),
    organizationId: core.serialization.property("_organizationId", core.serialization.string()),
    environmentId: core.serialization.property("_environmentId", core.serialization.string()),
    creatorId: core.serialization.property("_creatorId", core.serialization.string()),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    channel: core.serialization.lazy(async () => (await import("../../..")).ChannelPreferenceType),
    content: core.serialization.string(),
    contentType: core.serialization.string(),
    variables: core.serialization
        .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()))
        .optional(),
    isDefault: core.serialization.boolean(),
    isDeleted: core.serialization.boolean(),
    createdAt: core.serialization.string().optional(),
    updatedAt: core.serialization.string().optional(),
    parentId: core.serialization.property("_parentId", core.serialization.string().optional()),
});

export declare namespace UpdateLayoutResponseDto {
    interface Raw {
        _id?: string | null;
        _organizationId: string;
        _environmentId: string;
        _creatorId: string;
        name: string;
        description?: string | null;
        channel: serializers.ChannelPreferenceType.Raw;
        content: string;
        contentType: string;
        variables?: Record<string, unknown>[] | null;
        isDefault: boolean;
        isDeleted: boolean;
        createdAt?: string | null;
        updatedAt?: string | null;
        _parentId?: string | null;
    }
}
