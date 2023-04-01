/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 6.5.0.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * File.h
 *
 * Must be named &#x60;File&#x60; for test.
 */

#ifndef File_H_
#define File_H_



#include <string>
#include <memory>
#include <vector>
#include <boost/property_tree/ptree.hpp>
#include "helpers.h"

namespace org {
namespace openapitools {
namespace server {
namespace model {

/// <summary>
/// Must be named &#x60;File&#x60; for test.
/// </summary>
class  File 
{
public:
    File() = default;
    explicit File(boost::property_tree::ptree const& pt);
    virtual ~File() = default;

    File(const File& other) = default; // copy constructor
    File(File&& other) noexcept = default; // move constructor

    File& operator=(const File& other) = default; // copy assignment
    File& operator=(File&& other) noexcept = default; // move assignment

    std::string toJsonString(bool prettyJson = false) const;
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree() const;
    void fromPropertyTree(boost::property_tree::ptree const& pt);


    /////////////////////////////////////////////
    /// File members

    /// <summary>
    /// Test capitalization
    /// </summary>
    std::string getSourceURI() const;
    void setSourceURI(std::string value);

protected:
    std::string m_SourceURI = "";
};

std::vector<File> createFileVectorFromJsonString(const std::string& json);

template<>
inline boost::property_tree::ptree toPt<File>(const File& val) {
    return val.toPropertyTree();
}

template<>
inline File fromPt<File>(const boost::property_tree::ptree& pt) {
    File ret;
    ret.fromPropertyTree(pt);
    return ret;
}

}
}
}
}

#endif /* File_H_ */
