/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Novu } from "@fern-api/novu";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Messages {
    interface Options {
        environment: environments.NovuEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Messages {
    constructor(private readonly options: Messages.Options) {}

    /**
     * Returns a list of messages, could paginate using the `page` query parameter
     */
    public async getAll(request: Novu.MessagesControllerGetMessagesRequest = {}): Promise<Novu.ActivitiesResponseDto> {
        const { channel, subscriberId, limit, page } = request;
        const _queryParams = new URLSearchParams();
        if (channel != null) {
            _queryParams.append("channel", channel);
        }

        if (subscriberId != null) {
            _queryParams.append("subscriberId", subscriberId);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/v1/messages"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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

    /**
     * Deletes a message entity from the Novu platform
     */
    public async delete(messageId: string): Promise<Novu.DeleteMessageResponseDto> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `/v1/messages/${messageId}`),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.DeleteMessageResponseDto.parseOrThrow(
                _response.body as serializers.DeleteMessageResponseDto.Raw,
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
