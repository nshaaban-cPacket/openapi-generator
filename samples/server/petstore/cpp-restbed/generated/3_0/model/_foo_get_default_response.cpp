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



#include "_foo_get_default_response.h"

#include <string>
#include <vector>
#include <map>
#include <sstream>
#include <stdexcept>
#include <regex>
#include <boost/lexical_cast.hpp>
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>
#include "helpers.h"

using boost::property_tree::ptree;
using boost::property_tree::read_json;
using boost::property_tree::write_json;

namespace org {
namespace openapitools {
namespace server {
namespace model {

_foo_get_default_response::_foo_get_default_response(boost::property_tree::ptree const& pt)
{
        fromPropertyTree(pt);
}


std::string _foo_get_default_response::toJsonString(bool prettyJson /* = false */) const
{
	std::stringstream ss;
	write_json(ss, this->toPropertyTree(), prettyJson);
    // workaround inspired by: https://stackoverflow.com/a/56395440
    std::regex reg("\\\"([0-9]+\\.{0,1}[0-9]*)\\\"");
    std::string result = std::regex_replace(ss.str(), reg, "$1");
    return result;
}

void _foo_get_default_response::fromJsonString(std::string const& jsonString)
{
	std::stringstream ss(jsonString);
	ptree pt;
	read_json(ss,pt);
	this->fromPropertyTree(pt);
}

ptree _foo_get_default_response::toPropertyTree() const
{
	ptree pt;
	ptree tmp_node;
	pt.add_child("string", m_string.toPropertyTree());
	return pt;
}

void _foo_get_default_response::fromPropertyTree(ptree const &pt)
{
	ptree tmp_node;
	if (pt.get_child_optional("string")) {
        m_string = fromPt<Foo>(pt.get_child("string"));
	}
}

Foo _foo_get_default_response::getString() const
{
    return m_string;
}

void _foo_get_default_response::setString(Foo value)
{
    m_string = value;
}



std::vector<_foo_get_default_response> create_foo_get_default_responseVectorFromJsonString(const std::string& json)
{
    std::stringstream sstream(json);
    boost::property_tree::ptree pt;
    boost::property_tree::json_parser::read_json(sstream,pt);

    auto vec = std::vector<_foo_get_default_response>();
    for (const auto& child: pt) {
        vec.emplace_back(_foo_get_default_response(child.second));
    }

    return vec;
}

}
}
}
}

