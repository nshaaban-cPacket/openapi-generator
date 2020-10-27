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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../../../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../../base';
// @ts-ignore
import { ApiResponse } from '../../../model/some/levels/deep';
// @ts-ignore
import { Pet } from '../../../model/some/levels/deep';
/**
 * PetApi - axios parameter creator
 * @export
 */
export const PetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPet: async (body: Pet, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addPet.');
            }
            const localVarPath = `/pet`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet: async (petId: number, apiKey?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling deletePet.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (apiKey !== undefined && apiKey !== null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByStatus: async (status: Array<'available' | 'pending' | 'sold'>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'status' is not null or undefined
            if (status === null || status === undefined) {
                throw new RequiredError('status','Required parameter status was null or undefined when calling findPetsByStatus.');
            }
            const localVarPath = `/pet/findByStatus`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (status) {
                localVarQueryParameter['status'] = status.join(COLLECTION_FORMATS.csv);
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByTags: async (tags: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'tags' is not null or undefined
            if (tags === null || tags === undefined) {
                throw new RequiredError('tags','Required parameter tags was null or undefined when calling findPetsByTags.');
            }
            const localVarPath = `/pet/findByTags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (tags) {
                localVarQueryParameter['tags'] = tags.join(COLLECTION_FORMATS.csv);
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetById: async (petId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling getPetById.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("api_key")
                    : await configuration.apiKey;
                localVarHeaderParameter["api_key"] = localVarApiKeyValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePet: async (body: Pet, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updatePet.');
            }
            const localVarPath = `/pet`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetWithForm: async (petId: number, name?: string, status?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling updatePetWithForm.');
            }
            const localVarPath = `/pet/{petId}`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (name !== undefined) {
                localVarFormParams.set('name', name as any);
            }
                if (status !== undefined) {
                localVarFormParams.set('status', status as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: async (petId: number, additionalMetadata?: string, file?: any, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'petId' is not null or undefined
            if (petId === null || petId === undefined) {
                throw new RequiredError('petId','Required parameter petId was null or undefined when calling uploadFile.');
            }
            const localVarPath = `/pet/{petId}/uploadImage`
                .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication petstore_auth required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("petstore_auth", ["write:pets", "read:pets"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if (additionalMetadata !== undefined) {
                localVarFormParams.append('additionalMetadata', additionalMetadata as any);
            }
                if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PetApi - functional programming interface
 * @export
 */
export const PetApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addPet(body: Pet, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).addPet(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePet(petId: number, apiKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).deletePet(petId, apiKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Pet>>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).findPetsByStatus(status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findPetsByTags(tags: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Pet>>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).findPetsByTags(tags, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPetById(petId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Pet>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).getPetById(petId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePet(body: Pet, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).updatePet(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePetWithForm(petId: number, name?: string, status?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).updatePetWithForm(petId, name, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiResponse>> {
            const localVarAxiosArgs = await PetApiAxiosParamCreator(configuration).uploadFile(petId, additionalMetadata, file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PetApi - factory interface
 * @export
 */
export const PetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Add a new pet to the store
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPet(body: Pet, options?: any): AxiosPromise<void> {
            return PetApiFp(configuration).addPet(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a pet
         * @param {number} petId Pet id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(petId: number, apiKey?: string, options?: any): AxiosPromise<void> {
            return PetApiFp(configuration).deletePet(petId, apiKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Multiple status values can be provided with comma separated strings
         * @summary Finds Pets by status
         * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any): AxiosPromise<Array<Pet>> {
            return PetApiFp(configuration).findPetsByStatus(status, options).then((request) => request(axios, basePath));
        },
        /**
         * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @summary Finds Pets by tags
         * @param {Array<string>} tags Tags to filter by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPetsByTags(tags: Array<string>, options?: any): AxiosPromise<Array<Pet>> {
            return PetApiFp(configuration).findPetsByTags(tags, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single pet
         * @summary Find pet by ID
         * @param {number} petId ID of pet to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPetById(petId: number, options?: any): AxiosPromise<Pet> {
            return PetApiFp(configuration).getPetById(petId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing pet
         * @param {Pet} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePet(body: Pet, options?: any): AxiosPromise<void> {
            return PetApiFp(configuration).updatePet(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates a pet in the store with form data
         * @param {number} petId ID of pet that needs to be updated
         * @param {string} [name] Updated name of the pet
         * @param {string} [status] Updated status of the pet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePetWithForm(petId: number, name?: string, status?: string, options?: any): AxiosPromise<void> {
            return PetApiFp(configuration).updatePetWithForm(petId, name, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary uploads an image
         * @param {number} petId ID of pet to update
         * @param {string} [additionalMetadata] Additional data to pass to server
         * @param {any} [file] file to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any): AxiosPromise<ApiResponse> {
            return PetApiFp(configuration).uploadFile(petId, additionalMetadata, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PetApi - object-oriented interface
 * @export
 * @class PetApi
 * @extends {BaseAPI}
 */
export class PetApi extends BaseAPI {
    /**
     * 
     * @summary Add a new pet to the store
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public addPet(body: Pet, options?: any) {
        return PetApiFp(this.configuration).addPet(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes a pet
     * @param {number} petId Pet id to delete
     * @param {string} [apiKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public deletePet(petId: number, apiKey?: string, options?: any) {
        return PetApiFp(this.configuration).deletePet(petId, apiKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     * @param {Array<'available' | 'pending' | 'sold'>} status Status values that need to be considered for filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, options?: any) {
        return PetApiFp(this.configuration).findPetsByStatus(status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     * @param {Array<string>} tags Tags to filter by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public findPetsByTags(tags: Array<string>, options?: any) {
        return PetApiFp(this.configuration).findPetsByTags(tags, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single pet
     * @summary Find pet by ID
     * @param {number} petId ID of pet to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public getPetById(petId: number, options?: any) {
        return PetApiFp(this.configuration).getPetById(petId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an existing pet
     * @param {Pet} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public updatePet(body: Pet, options?: any) {
        return PetApiFp(this.configuration).updatePet(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates a pet in the store with form data
     * @param {number} petId ID of pet that needs to be updated
     * @param {string} [name] Updated name of the pet
     * @param {string} [status] Updated status of the pet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, options?: any) {
        return PetApiFp(this.configuration).updatePetWithForm(petId, name, status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary uploads an image
     * @param {number} petId ID of pet to update
     * @param {string} [additionalMetadata] Additional data to pass to server
     * @param {any} [file] file to upload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PetApi
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: any, options?: any) {
        return PetApiFp(this.configuration).uploadFile(petId, additionalMetadata, file, options).then((request) => request(this.axios, this.basePath));
    }
}
