/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Activity {
    interface Options {
        environment: string;
    }
}

export class Activity {
    constructor(private readonly options: Activity.Options) {}

    public async activityControllerGetActivityFeed(
        request: Novu.ActivityControllerGetActivityFeedRequest
    ): Promise<Novu.ActivitiesResponseDto> {
        const { search, page, transactionId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("search", search);
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (transactionId != null) {
            _queryParams.append("transactionId", transactionId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/activity"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ActivitiesResponseDto.parseOrThrow(
                _response.body as serializers.ActivitiesResponseDto.Raw,
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

    public async activityControllerGetActivityStats(): Promise<Novu.ActivityStatsResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/activity/stats"),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.ActivityStatsResponseDto.parseOrThrow(
                _response.body as serializers.ActivityStatsResponseDto.Raw,
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

    public async activityControllerGetActivityGraphStats(
        request: Novu.ActivityControllerGetActivityGraphStatsRequest = {}
    ): Promise<Novu.ActivityGraphStatesResponse[]> {
        const { days } = request;
        const _queryParams = new URLSearchParams();
        if (days != null) {
            _queryParams.append("days", days.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/activity/graph/stats"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.activity.activityControllerGetActivityGraphStats.Response.parseOrThrow(
                _response.body as serializers.activity.activityControllerGetActivityGraphStats.Response.Raw,
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
