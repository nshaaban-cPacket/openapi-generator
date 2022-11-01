/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 6.2.1.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * StoreApi.h
 *
 * 
 */

#ifndef StoreApi_H_
#define StoreApi_H_


#include <memory>
#include <utility>
#include <exception>
#include <functional>

#include <corvusoft/restbed/session.hpp>
#include <corvusoft/restbed/resource.hpp>
#include <corvusoft/restbed/request.hpp>
#include <corvusoft/restbed/service.hpp>
#include <corvusoft/restbed/settings.hpp>

#include "Order.h"
#include <map>
#include <string>

namespace org {
namespace openapitools {
namespace server {
namespace api {

using namespace org::openapitools::server::model;

///
/// Exception to flag problems in the handlers
///
class  StoreApiException: public std::exception
{
public:
    StoreApiException(int status_code, std::string what);

    int getStatus() const;
    const char* what() const noexcept override;

private:
    int m_status;
    std::string m_what;
};

namespace StoreApiResources {
/// <summary>
/// Delete purchase order by ID
/// </summary>
/// <remarks>
/// For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
/// </remarks>
class  StoreOrderOrder_idResource: public restbed::Resource
{
public:
    StoreOrderOrder_idResource(const std::string& context = "/v2");
    virtual ~StoreOrderOrder_idResource() = default;

    StoreOrderOrder_idResource(
        const StoreOrderOrder_idResource& other) = default; // copy constructor
    StoreOrderOrder_idResource(StoreOrderOrder_idResource&& other) noexcept = default; // move constructor

    StoreOrderOrder_idResource& operator=(const StoreOrderOrder_idResource& other) = default; // copy assignment
    StoreOrderOrder_idResource& operator=(StoreOrderOrder_idResource&& other) noexcept = default; // move assignment

    /////////////////////////////////////////////////////
    // Set these to implement the server functionality //
    /////////////////////////////////////////////////////
    std::function<int(
        std::string & orderId)> handler_DELETE_func =
            [](std::string &) -> int
                { throw StoreApiException(501, "Not implemented"); };

    std::function<std::pair<int, Order>(
        int64_t & orderId)> handler_GET_func =
            [](int64_t &) -> std::pair<int, Order>
                { throw StoreApiException(501, "Not implemented"); };


protected:
    //////////////////////////////////////////////////////////
    // As an alternative to setting the `std::function`s    //
    // override these to implement the server functionality //
    //////////////////////////////////////////////////////////

    virtual int handler_DELETE(
        std::string & orderId);

    virtual std::pair<int, Order> handler_GET(
        int64_t & orderId);

protected:
    //////////////////////////////////////
    // Override these for customization //
    //////////////////////////////////////

    virtual std::string extractBodyContent(const std::shared_ptr<restbed::Session>& session);
    virtual std::string extractFormParamsFromBody(const std::string& paramName, const std::string& body);

    virtual std::pair<int, std::string> handleStoreApiException(const StoreApiException& e);
    virtual std::pair<int, std::string> handleStdException(const std::exception& e);
    virtual std::pair<int, std::string> handleUnspecifiedException();

    virtual void setResponseHeader(const std::shared_ptr<restbed::Session>& session,
        const std::string& header);

    virtual void returnResponse(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result, std::multimap<std::string, std::string>& contentType);
    virtual void defaultSessionClose(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result);

private:
    void handler_DELETE_internal(const std::shared_ptr<restbed::Session> session);
    void handler_GET_internal(const std::shared_ptr<restbed::Session> session);
};

/// <summary>
/// Returns pet inventories by status
/// </summary>
/// <remarks>
/// Returns a map of status codes to quantities
/// </remarks>
class  StoreInventoryResource: public restbed::Resource
{
public:
    StoreInventoryResource(const std::string& context = "/v2");
    virtual ~StoreInventoryResource() = default;

    StoreInventoryResource(
        const StoreInventoryResource& other) = default; // copy constructor
    StoreInventoryResource(StoreInventoryResource&& other) noexcept = default; // move constructor

    StoreInventoryResource& operator=(const StoreInventoryResource& other) = default; // copy assignment
    StoreInventoryResource& operator=(StoreInventoryResource&& other) noexcept = default; // move assignment

    /////////////////////////////////////////////////////
    // Set these to implement the server functionality //
    /////////////////////////////////////////////////////
    std::function<std::pair<int, std::map<std::string, int32_t>>(
        )> handler_GET_func =
            []() -> std::pair<int, std::map<std::string, int32_t>>
                { throw StoreApiException(501, "Not implemented"); };


protected:
    //////////////////////////////////////////////////////////
    // As an alternative to setting the `std::function`s    //
    // override these to implement the server functionality //
    //////////////////////////////////////////////////////////

    virtual std::pair<int, std::map<std::string, int32_t>> handler_GET(
        );


protected:
    //////////////////////////////////////
    // Override these for customization //
    //////////////////////////////////////

    virtual std::string extractBodyContent(const std::shared_ptr<restbed::Session>& session);
    virtual std::string extractFormParamsFromBody(const std::string& paramName, const std::string& body);

    virtual std::pair<int, std::string> handleStoreApiException(const StoreApiException& e);
    virtual std::pair<int, std::string> handleStdException(const std::exception& e);
    virtual std::pair<int, std::string> handleUnspecifiedException();

    virtual void setResponseHeader(const std::shared_ptr<restbed::Session>& session,
        const std::string& header);

    virtual void returnResponse(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result, std::multimap<std::string, std::string>& contentType);
    virtual void defaultSessionClose(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result);

private:
    void handler_GET_internal(const std::shared_ptr<restbed::Session> session);
};

/// <summary>
/// Place an order for a pet
/// </summary>
/// <remarks>
/// 
/// </remarks>
class  StoreOrderResource: public restbed::Resource
{
public:
    StoreOrderResource(const std::string& context = "/v2");
    virtual ~StoreOrderResource() = default;

    StoreOrderResource(
        const StoreOrderResource& other) = default; // copy constructor
    StoreOrderResource(StoreOrderResource&& other) noexcept = default; // move constructor

    StoreOrderResource& operator=(const StoreOrderResource& other) = default; // copy assignment
    StoreOrderResource& operator=(StoreOrderResource&& other) noexcept = default; // move assignment

    /////////////////////////////////////////////////////
    // Set these to implement the server functionality //
    /////////////////////////////////////////////////////
    std::function<std::pair<int, Order>(
        Order & order)> handler_POST_func =
            [](Order &) -> std::pair<int, Order>
                { throw StoreApiException(501, "Not implemented"); };


protected:
    //////////////////////////////////////////////////////////
    // As an alternative to setting the `std::function`s    //
    // override these to implement the server functionality //
    //////////////////////////////////////////////////////////

    virtual std::pair<int, Order> handler_POST(
        Order & order);


protected:
    //////////////////////////////////////
    // Override these for customization //
    //////////////////////////////////////

    virtual std::string extractBodyContent(const std::shared_ptr<restbed::Session>& session);
    virtual std::string extractFormParamsFromBody(const std::string& paramName, const std::string& body);

    virtual std::pair<int, std::string> handleStoreApiException(const StoreApiException& e);
    virtual std::pair<int, std::string> handleStdException(const std::exception& e);
    virtual std::pair<int, std::string> handleUnspecifiedException();

    virtual void setResponseHeader(const std::shared_ptr<restbed::Session>& session,
        const std::string& header);

    virtual void returnResponse(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result, std::multimap<std::string, std::string>& contentType);
    virtual void defaultSessionClose(const std::shared_ptr<restbed::Session>& session,
        const int status, const std::string& result);

private:
    void handler_POST_internal(const std::shared_ptr<restbed::Session> session);
};

} /* namespace StoreApiResources */

using StoreApiStoreOrderOrder_idResource [[deprecated]] = StoreApiResources::StoreOrderOrder_idResource;
using StoreApiStoreInventoryResource [[deprecated]] = StoreApiResources::StoreInventoryResource;
using StoreApiStoreOrderResource [[deprecated]] = StoreApiResources::StoreOrderResource;

//
// The restbed service to actually implement the REST server
//
class  StoreApi
{
public:
    explicit StoreApi(std::shared_ptr<restbed::Service> const& restbedService);
	virtual ~StoreApi();

    std::shared_ptr<StoreApiResources::StoreOrderOrder_idResource> getStoreOrderOrder_idResource();
    std::shared_ptr<StoreApiResources::StoreInventoryResource> getStoreInventoryResource();
    std::shared_ptr<StoreApiResources::StoreOrderResource> getStoreOrderResource();

    void setResource(std::shared_ptr<StoreApiResources::StoreOrderOrder_idResource> resource);
    void setResource(std::shared_ptr<StoreApiResources::StoreInventoryResource> resource);
    void setResource(std::shared_ptr<StoreApiResources::StoreOrderResource> resource);
    [[deprecated("use setResource()")]]
    virtual void setStoreApiStoreOrderOrder_idResource(std::shared_ptr<StoreApiResources::StoreOrderOrder_idResource> spStoreApiStoreOrderOrder_idResource);
    [[deprecated("use setResource()")]]
    virtual void setStoreApiStoreInventoryResource(std::shared_ptr<StoreApiResources::StoreInventoryResource> spStoreApiStoreInventoryResource);
    [[deprecated("use setResource()")]]
    virtual void setStoreApiStoreOrderResource(std::shared_ptr<StoreApiResources::StoreOrderResource> spStoreApiStoreOrderResource);

    virtual void publishDefaultResources();

    virtual std::shared_ptr<restbed::Service> service();

protected:
	std::shared_ptr<StoreApiResources::StoreOrderOrder_idResource> m_spStoreOrderOrder_idResource;
	std::shared_ptr<StoreApiResources::StoreInventoryResource> m_spStoreInventoryResource;
	std::shared_ptr<StoreApiResources::StoreOrderResource> m_spStoreOrderResource;

private:
    std::shared_ptr<restbed::Service> m_service;
};


}
}
}
}

#endif /* StoreApi_H_ */

