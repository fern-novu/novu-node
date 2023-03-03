/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface ChangeResponseDto {
    id?: string;
    creatorId: string;
    environmentId: string;
    organizationId: string;
    entityId: string;
    enabled: boolean;
    type: Novu.ChangeResponseDtoProperties;
    change: Record<string, unknown>;
    createdAt: string;
    parentId?: string;
}