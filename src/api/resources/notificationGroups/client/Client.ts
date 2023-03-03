/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace NotificationGroups {
    interface Options {
        environment: environments.NovuEnvironment | string;
        apiKey?: core.Supplier<string>;
    }
}

export class NotificationGroups {
    constructor(private readonly options: NotificationGroups.Options) {}

    public async getAll(): Promise<Novu.NotificationGroupResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/notification-groups"),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.notificationGroups.getAll.Response.parseOrThrow(
                _response.body as serializers.notificationGroups.getAll.Response.Raw,
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

    public async create(request: Novu.CreateNotificationGroupRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/notification-groups"),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.CreateNotificationGroupRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
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
