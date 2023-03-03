/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";

export interface EnvironmentResponseDto {
    id?: string;
    name: string;
    organizationId: string;
    identifier: string;
    apiKeys: Novu.ApiKey[];
    widget: Novu.WidgetSettings;
    parentId: string;
}