/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 6.1.1-SNAPSHOT.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * User.h
 *
 * 
 */

#ifndef User_H_
#define User_H_



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
class  User 
{
public:
    User() = default;
    explicit User(boost::property_tree::ptree const& pt);
    virtual ~User() = default;

    User(const User& other) = default; // copy constructor
    User(User&& other) noexcept = default; // move constructor

    User& operator=(const User& other) = default; // copy assignment
    User& operator=(User&& other) noexcept = default; // move assignment

    std::string toJsonString(bool prettyJson = false) const;
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree() const;
    void fromPropertyTree(boost::property_tree::ptree const& pt);


    /////////////////////////////////////////////
    /// User members

    /// <summary>
    /// 
    /// </summary>
    int64_t getId() const;
    void setId(int64_t value);

    /// <summary>
    /// 
    /// </summary>
    std::string getUsername() const;
    void setUsername(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getFirstName() const;
    void setFirstName(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getLastName() const;
    void setLastName(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getEmail() const;
    void setEmail(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getPassword() const;
    void setPassword(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getPhone() const;
    void setPhone(std::string value);

    /// <summary>
    /// User Status
    /// </summary>
    int32_t getUserStatus() const;
    void setUserStatus(int32_t value);

protected:
    int64_t m_Id = 0L;
    std::string m_Username = "";
    std::string m_FirstName = "";
    std::string m_LastName = "";
    std::string m_Email = "";
    std::string m_Password = "";
    std::string m_Phone = "";
    int32_t m_UserStatus = 0;
};

std::vector<User> createUserVectorFromJsonString(const std::string& json);

template<>
inline boost::property_tree::ptree toPt<User>(const User& val) {
    return val.toPropertyTree();
}

template<>
inline User fromPt<User>(const boost::property_tree::ptree& pt) {
    User ret;
    ret.fromPropertyTree(pt);
    return ret;
}

}
}
}
}

#endif /* User_H_ */
