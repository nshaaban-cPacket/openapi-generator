/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ModelApiResponse,
    Pet,
} from '../models';

export interface AddPetRequest {
    body: Pet;
}

export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}

export interface FindPetsByStatusRequest {
    status: Array<FindPetsByStatusStatusEnum>;
}

export interface FindPetsByTagsRequest {
    tags: Array<string>;
}

export interface GetPetByIdRequest {
    petId: number;
}

export interface UpdatePetRequest {
    body: Pet;
}

export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}

export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    file?: Blob;
}

/**
 * 
 */
export class PetApi extends runtime.BaseAPI {

    /**
     * Add a new pet to the store
     */
    async addPetRaw(requestParameters: AddPetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addPet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const response = await this.request({
            path: `/pet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add a new pet to the store
     */
    async addPet(requestParameters: AddPetRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addPetRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a pet
     */
    async deletePetRaw(requestParameters: DeletePetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling deletePet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.apiKey !== undefined && requestParameters.apiKey !== null) {
            headerParameters['api_key'] = String(requestParameters.apiKey);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a pet
     */
    async deletePet(requestParameters: DeletePetRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deletePetRaw(requestParameters, initOverrides);
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatusRaw(requestParameters: FindPetsByStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling findPetsByStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const response = await this.request({
            path: `/pet/findByStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatus(requestParameters: FindPetsByStatusRequest, initOverrides?: RequestInit): Promise<Array<Pet>> {
        const response = await this.findPetsByStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTagsRaw(requestParameters: FindPetsByTagsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Pet>>> {
        if (requestParameters.tags === null || requestParameters.tags === undefined) {
            throw new runtime.RequiredError('tags','Required parameter requestParameters.tags was null or undefined when calling findPetsByTags.');
        }

        const queryParameters: any = {};

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const response = await this.request({
            path: `/pet/findByTags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTags(requestParameters: FindPetsByTagsRequest, initOverrides?: RequestInit): Promise<Array<Pet>> {
        const response = await this.findPetsByTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetByIdRaw(requestParameters: GetPetByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Pet>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling getPetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetById(requestParameters: GetPetByIdRequest, initOverrides?: RequestInit): Promise<Pet> {
        const response = await this.getPetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing pet
     */
    async updatePetRaw(requestParameters: UpdatePetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updatePet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const response = await this.request({
            path: `/pet`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an existing pet
     */
    async updatePet(requestParameters: UpdatePetRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updatePetRaw(requestParameters, initOverrides);
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithFormRaw(requestParameters: UpdatePetWithFormRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.name !== undefined) {
            formParams.append('name', requestParameters.name as any);
        }

        if (requestParameters.status !== undefined) {
            formParams.append('status', requestParameters.status as any);
        }

        const response = await this.request({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithForm(requestParameters: UpdatePetWithFormRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updatePetWithFormRaw(requestParameters, initOverrides);
    }

    /**
     * uploads an image
     */
    async uploadFileRaw(requestParameters: UploadFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ModelApiResponse>> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling uploadFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', requestParameters.additionalMetadata as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/pet/{petId}/uploadImage`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * uploads an image
     */
    async uploadFile(requestParameters: UploadFileRequest, initOverrides?: RequestInit): Promise<ModelApiResponse> {
        const response = await this.uploadFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
* @export
*/
export const FindPetsByStatusStatusEnum = {
    Available: 'available' as 'available',
    Pending: 'pending' as 'pending',
    Sold: 'sold' as 'sold'
};
export type FindPetsByStatusStatusEnum = typeof FindPetsByStatusStatusEnum[keyof typeof FindPetsByStatusStatusEnum];
