# openapi_client.PathApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path**](PathApi.md#tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path) | **GET** /path/string/{path_string}/integer/{path_integer}/{enum_nonref_string_path}/{enum_ref_string_path} | Test path parameter(s)


# **tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path**
> str tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path(path_string, path_integer, enum_nonref_string_path, enum_ref_string_path)

Test path parameter(s)

Test path parameter(s)

### Example


```python
import time
import os
import openapi_client
from openapi_client.models.string_enum_ref import StringEnumRef
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PathApi(api_client)
    path_string = 'path_string_example' # str | 
    path_integer = 56 # int | 
    enum_nonref_string_path = 'enum_nonref_string_path_example' # str | 
    enum_ref_string_path = openapi_client.StringEnumRef() # StringEnumRef | 

    try:
        # Test path parameter(s)
        api_response = api_instance.tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path(path_string, path_integer, enum_nonref_string_path, enum_ref_string_path)
        print("The response of PathApi->tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PathApi->tests_path_string_path_string_integer_path_integer_enum_nonref_string_path_enum_ref_string_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path_string** | **str**|  | 
 **path_integer** | **int**|  | 
 **enum_nonref_string_path** | **str**|  | 
 **enum_ref_string_path** | [**StringEnumRef**](.md)|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

