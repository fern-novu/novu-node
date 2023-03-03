/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const TemplateResponse: core.serialization.ObjectSchema<
    serializers.TemplateResponse.Raw,
    Novu.TemplateResponse
> = core.serialization.object({
    id: core.serialization.property("_id", core.serialization.string()),
    name: core.serialization.string(),
    critical: core.serialization.boolean(),
});

export declare namespace TemplateResponse {
    interface Raw {
        _id: string;
        name: string;
        critical: boolean;
    }
}
