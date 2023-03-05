/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface GetLayoutResponseDto {
    id?: string;
    organizationId: string;
    environmentId: string;
    creatorId: string;
    name: string;
    description?: string;
    channel: Novu.ChannelPreferenceType;
    content: string;
    contentType: string;
    variables?: Record<string, unknown>[];
    isDefault: boolean;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
    parentId?: string;
}
