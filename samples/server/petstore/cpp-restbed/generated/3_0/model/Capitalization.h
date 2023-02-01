/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 6.4.0-SNAPSHOT.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * Capitalization.h
 *
 * 
 */

#ifndef Capitalization_H_
#define Capitalization_H_



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
/// 
/// </summary>
class  Capitalization 
{
public:
    Capitalization() = default;
    explicit Capitalization(boost::property_tree::ptree const& pt);
    virtual ~Capitalization() = default;

    Capitalization(const Capitalization& other) = default; // copy constructor
    Capitalization(Capitalization&& other) noexcept = default; // move constructor

    Capitalization& operator=(const Capitalization& other) = default; // copy assignment
    Capitalization& operator=(Capitalization&& other) noexcept = default; // move assignment

    std::string toJsonString(bool prettyJson = false) const;
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree() const;
    void fromPropertyTree(boost::property_tree::ptree const& pt);


    /////////////////////////////////////////////
    /// Capitalization members

    /// <summary>
    /// 
    /// </summary>
    std::string getSmallCamel() const;
    void setSmallCamel(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getCapitalCamel() const;
    void setCapitalCamel(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getSmallSnake() const;
    void setSmallSnake(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getCapitalSnake() const;
    void setCapitalSnake(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getSCAETHFlowPoints() const;
    void setSCAETHFlowPoints(std::string value);

    /// <summary>
    /// Name of the pet 
    /// </summary>
    std::string getATTNAME() const;
    void setATTNAME(std::string value);

protected:
    std::string m_SmallCamel = "";
    std::string m_CapitalCamel = "";
    std::string m_Small_Snake = "";
    std::string m_Capital_Snake = "";
    std::string m_SCA_ETH_Flow_Points = "";
    std::string m_ATT_NAME = "";
};

std::vector<Capitalization> createCapitalizationVectorFromJsonString(const std::string& json);

template<>
inline boost::property_tree::ptree toPt<Capitalization>(const Capitalization& val) {
    return val.toPropertyTree();
}

template<>
inline Capitalization fromPt<Capitalization>(const boost::property_tree::ptree& pt) {
    Capitalization ret;
    ret.fromPropertyTree(pt);
    return ret;
}

}
}
}
}

#endif /* Capitalization_H_ */
