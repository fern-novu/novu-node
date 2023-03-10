/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Novu } from "@fern-api/novu";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.inboundParse.getMxRecord.Response.Raw,
    Novu.GetMxRecordResponseDto[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).GetMxRecordResponseDto)
);

export declare namespace Response {
    type Raw = serializers.GetMxRecordResponseDto.Raw[];
}
