/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Environments {
    interface Options {
        environment: environments.NovuEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class Environments {
    constructor(private readonly options: Environments.Options) {}

    public async getCurrent(): Promise<Novu.EnvironmentResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments/me"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
        });
        if (_response.ok) {
            return await serializers.EnvironmentResponseDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    public async getAll(): Promise<Novu.EnvironmentResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
        });
        if (_response.ok) {
            return await serializers.environments.getAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    public async create(request: Novu.CreateEnvironmentRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            body: await serializers.CreateEnvironmentRequestDto.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
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

    public async update(environmentId: string, request: Novu.UpdateEnvironmentRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/environments/${environmentId}`),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            body: await serializers.UpdateEnvironmentRequestDto.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
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

    public async getApiKeys(): Promise<Novu.ApiKey[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments/api-keys"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
        });
        if (_response.ok) {
            return await serializers.environments.getApiKeys.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    public async regenerateApiKeys(): Promise<Novu.ApiKey[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments/api-keys/regenerate"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
        });
        if (_response.ok) {
            return await serializers.environments.regenerateApiKeys.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    public async updateWidgetSettings(
        request: Novu.UpdateWidgetSettingsRequestDto
    ): Promise<Novu.EnvironmentResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/environments/widget/settings"),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            body: await serializers.UpdateWidgetSettingsRequestDto.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.EnvironmentResponseDto.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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

    private async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.apiKey);
        if (value != null) {
            return `ApiKey ${value}`;
        }

        return undefined;
    }
}
