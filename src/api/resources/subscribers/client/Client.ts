/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Subscribers {
    interface Options {
        environment: string;
    }
}

export class Subscribers {
    constructor(private readonly options: Subscribers.Options) {}

    /**
     * Returns a list of subscribers, could paginated using the `page` query parameter
     */
    public async getAll(
        request: Novu.SubscribersControllerGetSubscribersRequest = {}
    ): Promise<Novu.SubscribersResponseDto> {
        const { page } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/subscribers"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.SubscribersResponseDto.parseOrThrow(
                _response.body as serializers.SubscribersResponseDto.Raw,
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

    /**
     * Creates a subscriber entity, in the Novu platform. The subscriber will be later used to receive notifications, and access notification feeds. Communication credentials such as email, phone number, and 3 rd party credentials i.e slack tokens could be later associated to this entity.
     */
    public async create(request: Novu.CreateSubscriberRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/subscribers"),
            method: "POST",
            body: await serializers.CreateSubscriberRequestDto.jsonOrThrow(request),
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

    /**
     * Get subscriber by your internal id used to identify the subscriber
     */
    public async get(subscriberId: string): Promise<Novu.SubscriberResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}`),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.SubscriberResponseDto.parseOrThrow(
                _response.body as serializers.SubscriberResponseDto.Raw,
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

    /**
     * Used to update the subscriber entity with new information
     */
    public async update(
        subscriberId: string,
        request: Novu.UpdateSubscriberRequestDto
    ): Promise<Novu.SubscriberResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}`),
            method: "PUT",
            body: await serializers.UpdateSubscriberRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.SubscriberResponseDto.parseOrThrow(
                _response.body as serializers.SubscriberResponseDto.Raw,
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

    /**
     * Deletes a subscriber entity from the Novu platform
     */
    public async delete(subscriberId: string): Promise<Novu.DeleteSubscriberResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}`),
            method: "DELETE",
        });
        if (_response.ok) {
            return await serializers.DeleteSubscriberResponseDto.parseOrThrow(
                _response.body as serializers.DeleteSubscriberResponseDto.Raw,
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

    /**
     * Subscriber credentials associated to the delivery methods such as slack and push tokens.
     */
    public async updateCredentials(
        subscriberId: string,
        request: Novu.UpdateSubscriberChannelRequestDto
    ): Promise<Novu.SubscriberResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/credentials`),
            method: "PUT",
            body: await serializers.UpdateSubscriberChannelRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.SubscriberResponseDto.parseOrThrow(
                _response.body as serializers.SubscriberResponseDto.Raw,
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

    /**
     * Used to update the subscriber isOnline flag.
     */
    public async updateOnlineStatus(
        subscriberId: string,
        request: Novu.UpdateSubscriberOnlineFlagRequestDto
    ): Promise<Novu.SubscriberResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/online-status`),
            method: "PATCH",
            body: await serializers.UpdateSubscriberOnlineFlagRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.SubscriberResponseDto.parseOrThrow(
                _response.body as serializers.SubscriberResponseDto.Raw,
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

    public async getPreferences(subscriberId: string): Promise<Novu.UpdateSubscriberPreferenceResponseDto[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/preferences`),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.subscribers.getPreferences.Response.parseOrThrow(
                _response.body as serializers.subscribers.getPreferences.Response.Raw,
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

    public async updatePreferences(
        subscriberId: string,
        templateId: string,
        request: Novu.UpdateSubscriberPreferenceRequestDto
    ): Promise<Novu.UpdateSubscriberPreferenceResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/preferences/${templateId}`),
            method: "PATCH",
            body: await serializers.UpdateSubscriberPreferenceRequestDto.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.UpdateSubscriberPreferenceResponseDto.parseOrThrow(
                _response.body as serializers.UpdateSubscriberPreferenceResponseDto.Raw,
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

    public async getFeed(
        subscriberId: string,
        request: Novu.SubscribersControllerGetNotificationsFeedRequest
    ): Promise<Novu.MessagesResponseDto> {
        const { page, feedIdentifier, seen } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        _queryParams.append("feedIdentifier", feedIdentifier);
        if (seen != null) {
            _queryParams.append("seen", seen.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/notifications/feed`),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.MessagesResponseDto.parseOrThrow(
                _response.body as serializers.MessagesResponseDto.Raw,
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

    public async getUnseenNotificationCount(
        subscriberId: string,
        request: Novu.SubscribersControllerGetUnseenCountRequest
    ): Promise<Novu.UnseenCountResponse> {
        const { seen } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("seen", seen.toString());
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/notifications/unseen`),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.UnseenCountResponse.parseOrThrow(
                _response.body as serializers.UnseenCountResponse.Raw,
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

    /**
     * This endpoint is deprecated please address /:subscriberId/messages/markAs instead
     */
    public async markMessageSeen(messageId: string, subscriberId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/messages/${messageId}/seen`),
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

    public async markAllMessagesSeen(subscriberId: string, request: Novu.MarkMessageAsRequestDto): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/subscribers/${subscriberId}/messages/markAs`),
            method: "POST",
            body: await serializers.MarkMessageAsRequestDto.jsonOrThrow(request),
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

    public async markMessageActionSeen(messageId: string, type: string, subscriberId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/v1/subscribers/${subscriberId}/messages/${messageId}/actions/${type}`
            ),
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
}
