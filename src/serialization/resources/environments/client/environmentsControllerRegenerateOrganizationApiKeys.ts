/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.environments.environmentsControllerRegenerateOrganizationApiKeys.Response.Raw,
    Novu.ApiKey[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).ApiKey));

export declare namespace Response {
    type Raw = serializers.ApiKey.Raw[];
}
