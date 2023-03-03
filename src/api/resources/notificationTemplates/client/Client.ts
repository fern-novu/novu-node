/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace NotificationTemplates {
    interface Options {
        environment: string;
    }
}

export class NotificationTemplates {
    constructor(private readonly options: NotificationTemplates.Options) {}

    public async getAll(
        request: Novu.NotificationTemplateControllerGetNotificationTemplatesRequest = {}
    ): Promise<Novu.NotificationTemplateResponse> {
        const { page, limit } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/notification-templates"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.NotificationTemplateResponse.parseOrThrow(
                _response.body as serializers.NotificationTemplateResponse.Raw,
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

    public async createTemplate(request: Novu.CreateNotificationTemplateRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/notification-templates"),
            method: "POST",
            body: await serializers.CreateNotificationTemplateRequestDto.jsonOrThrow(request),
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

    public async get(templateId: string): Promise<Novu.NotificationTemplateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}`),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.NotificationTemplateResponse.parseOrThrow(
                _response.body as serializers.NotificationTemplateResponse.Raw,
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

    public async update(
        templateId: string,
        request: Novu.UpdateNotificationTemplateRequestDto
    ): Promise<Novu.NotificationTemplateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}`),
            method: "PUT",
            body: await serializers.UpdateNotificationTemplateRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.NotificationTemplateResponse.parseOrThrow(
                _response.body as serializers.NotificationTemplateResponse.Raw,
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

    public async delete(templateId: string): Promise<boolean> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}`),
            method: "DELETE",
        });
        if (_response.ok) {
            return await serializers.notificationTemplates.delete.Response.parseOrThrow(
                _response.body as serializers.notificationTemplates.delete.Response.Raw,
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

    public async getBlueprint(templateId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}/blueprint`),
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

    public async createFromBlueprint(templateId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}/blueprint`),
            method: "POST",
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

    public async updateTemplateStatus(
        templateId: string,
        request: Novu.ChangeTemplateStatusRequestDto
    ): Promise<Novu.NotificationTemplateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/notification-templates/${templateId}/status`),
            method: "PUT",
            body: await serializers.ChangeTemplateStatusRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.NotificationTemplateResponse.parseOrThrow(
                _response.body as serializers.NotificationTemplateResponse.Raw,
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
