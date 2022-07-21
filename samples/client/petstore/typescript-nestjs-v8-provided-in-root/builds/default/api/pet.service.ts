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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/apiResponse';
import { Pet } from '../model/pet';
import { Configuration } from '../configuration';


@Injectable()
export class PetService {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Add a new pet to the store
     * 
     * @param pet Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPet(pet: Pet, ): Observable<AxiosResponse<Pet>>;
    public addPet(pet: Pet, ): Observable<any> {

        if (pet === null || pet === undefined) {
            throw new Error('Required parameter pet was null or undefined when calling addPet.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<Pet>(`${this.basePath}/pet`,
            pet,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Deletes a pet
     * 
     * @param petId Pet id to delete
     * @param apiKey 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePet(petId: number, apiKey?: string, ): Observable<AxiosResponse<any>>;
    public deletePet(petId: number, apiKey?: string, ): Observable<any> {

        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling deletePet.');
        }


        let headers = this.defaultHeaders;
        if (apiKey !== undefined && apiKey !== null) {
            headers['api_key'] = String(apiKey);
        }

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.delete<any>(`${this.basePath}/pet/${encodeURIComponent(String(petId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, ): Observable<AxiosResponse<Array<Pet>>>;
    public findPetsByStatus(status: Array<'available' | 'pending' | 'sold'>, ): Observable<any> {

        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling findPetsByStatus.');
        }

        let queryParameters = {};
        if (status) {
            queryParameters['status'] = status.join(COLLECTION_FORMATS['csv']);
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Pet>>(`${this.basePath}/pet/findByStatus`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPetsByTags(tags: Array<string>, ): Observable<AxiosResponse<Array<Pet>>>;
    public findPetsByTags(tags: Array<string>, ): Observable<any> {

        if (tags === null || tags === undefined) {
            throw new Error('Required parameter tags was null or undefined when calling findPetsByTags.');
        }

        let queryParameters = {};
        if (tags) {
            queryParameters['tags'] = tags.join(COLLECTION_FORMATS['csv']);
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Pet>>(`${this.basePath}/pet/findByTags`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPetById(petId: number, ): Observable<AxiosResponse<Pet>>;
    public getPetById(petId: number, ): Observable<any> {

        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling getPetById.');
        }

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["api_key"]) {
            headers['api_key'] = this.configuration.apiKeys["api_key"];
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Pet>(`${this.basePath}/pet/${encodeURIComponent(String(petId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Update an existing pet
     * 
     * @param pet Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePet(pet: Pet, ): Observable<AxiosResponse<Pet>>;
    public updatePet(pet: Pet, ): Observable<any> {

        if (pet === null || pet === undefined) {
            throw new Error('Required parameter pet was null or undefined when calling updatePet.');
        }

        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.put<Pet>(`${this.basePath}/pet`,
            pet,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Updates a pet in the store with form data
     * 
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePetWithForm(petId: number, name?: string, status?: string, ): Observable<AxiosResponse<any>>;
    public updatePetWithForm(petId: number, name?: string, status?: string, ): Observable<any> {

        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }



        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            // formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (name !== undefined) {
            formParams.append('name', <any>name);
        }

        if (status !== undefined) {
            formParams.append('status', <any>status);
        }

        return this.httpClient.post<any>(`${this.basePath}/pet/${encodeURIComponent(String(petId))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * uploads an image
     * 
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, ): Observable<AxiosResponse<ApiResponse>>;
    public uploadFile(petId: number, additionalMetadata?: string, file?: Blob, ): Observable<any> {

        if (petId === null || petId === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling uploadFile.');
        }



        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers['Authorization'] = 'Bearer ' + accessToken;
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;

        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            // formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (additionalMetadata !== undefined) {
            formParams.append('additionalMetadata', <any>additionalMetadata);
        }

        if (file !== undefined) {
            formParams.append('file', <any>file);
        }

        return this.httpClient.post<ApiResponse>(`${this.basePath}/pet/${encodeURIComponent(String(petId))}/uploadImage`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
