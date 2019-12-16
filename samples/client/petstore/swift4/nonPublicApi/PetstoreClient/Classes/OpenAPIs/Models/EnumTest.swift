//
// EnumTest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


internal struct EnumTest: Codable {

    internal enum EnumString: String, Codable {
        case upper = "UPPER"
        case lower = "lower"
        case empty = ""
    }
    internal enum EnumStringRequired: String, Codable {
        case upper = "UPPER"
        case lower = "lower"
        case empty = ""
    }
    internal enum EnumInteger: Int, Codable {
        case _1 = 1
        case number1 = -1
    }
    internal enum EnumNumber: Double, Codable {
        case _11 = 1.1
        case number12 = -1.2
    }
    internal var enumString: EnumString?
    internal var enumStringRequired: EnumStringRequired
    internal var enumInteger: EnumInteger?
    internal var enumNumber: EnumNumber?
    internal var outerEnum: OuterEnum?

    internal init(enumString: EnumString?, enumStringRequired: EnumStringRequired, enumInteger: EnumInteger?, enumNumber: EnumNumber?, outerEnum: OuterEnum?) {
        self.enumString = enumString
        self.enumStringRequired = enumStringRequired
        self.enumInteger = enumInteger
        self.enumNumber = enumNumber
        self.outerEnum = outerEnum
    }

    internal enum CodingKeys: String, CodingKey { 
        case enumString = "enum_string"
        case enumStringRequired = "enum_string_required"
        case enumInteger = "enum_integer"
        case enumNumber = "enum_number"
        case outerEnum
    }

}
