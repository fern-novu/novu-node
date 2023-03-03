/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Integrations {
    interface Options {
        environment: string;
    }
}

export class Integrations {
    constructor(private readonly options: Integrations.Options) {}

    public async integrationsControllerGetIntegrations(): Promise<Novu.IntegrationResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/integrations"),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.integrations.integrationsControllerGetIntegrations.Response.parseOrThrow(
                _response.body as serializers.integrations.integrationsControllerGetIntegrations.Response.Raw,
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

    public async integrationsControllerCreateIntegration(request: Novu.CreateIntegrationRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/integrations"),
            method: "POST",
            body: await serializers.CreateIntegrationRequestDto.jsonOrThrow(request),
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

    public async integrationsControllerGetActiveIntegrations(): Promise<Novu.IntegrationResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/integrations/active"),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.integrations.integrationsControllerGetActiveIntegrations.Response.parseOrThrow(
                _response.body as serializers.integrations.integrationsControllerGetActiveIntegrations.Response.Raw,
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

    public async integrationsControllerGetWebhookSupportStatus(providerId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/integrations/webhook/provider/${providerId}/status`),
            method: "GET",
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

    public async integrationsControllerUpdateIntegrationById(
        integrationId: string,
        request: Novu.UpdateIntegrationRequestDto
    ): Promise<Novu.IntegrationResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/integrations/${integrationId}`),
            method: "PUT",
            body: await serializers.UpdateIntegrationRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.IntegrationResponseDto.parseOrThrow(
                _response.body as serializers.IntegrationResponseDto.Raw,
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

    public async integrationsControllerRemoveIntegration(
        integrationId: string
    ): Promise<Novu.IntegrationResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/integrations/${integrationId}`),
            method: "DELETE",
        });
        if (_response.ok) {
            return await serializers.integrations.integrationsControllerRemoveIntegration.Response.parseOrThrow(
                _response.body as serializers.integrations.integrationsControllerRemoveIntegration.Response.Raw,
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

    public async integrationsControllerGetProviderLimit(channelType: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/integrations/${channelType}/limit`),
            method: "GET",
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

    public async integrationsControllerGetInAppActivated(): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/integrations/in-app/status"),
            method: "GET",
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
