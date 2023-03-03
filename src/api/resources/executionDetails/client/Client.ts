/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace ExecutionDetails {
    interface Options {
        environment: string;
    }
}

export class ExecutionDetails {
    constructor(private readonly options: ExecutionDetails.Options) {}

    public async getAll(
        request: Novu.ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest
    ): Promise<Novu.ExecutionDetailsResponseDto[]> {
        const { notificationId, subscriberId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("notificationId", notificationId);
        _queryParams.append("subscriberId", subscriberId);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/execution-details"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.executionDetails.getAll.Response.parseOrThrow(
                _response.body as serializers.executionDetails.getAll.Response.Raw,
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
