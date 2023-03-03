/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace InboundParse {
    interface Options {
        environment: string;
    }
}

export class InboundParse {
    constructor(private readonly options: InboundParse.Options) {}

    public async getMxRecord(): Promise<Novu.GetMxRecordResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/inbound-parse/mx/status"),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.inboundParse.getMxRecord.Response.parseOrThrow(
                _response.body as serializers.inboundParse.getMxRecord.Response.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.NovuError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.NovuError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.NovuTimeoutError();
            case "unknown":
                throw new errors.NovuError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
