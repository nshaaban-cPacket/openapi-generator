//
// ArrayTest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


internal struct ArrayTest: Codable {

    internal var arrayOfString: [String]?
    internal var arrayArrayOfInteger: [[Int64]]?
    internal var arrayArrayOfModel: [[ReadOnlyFirst]]?

    internal init(arrayOfString: [String]?, arrayArrayOfInteger: [[Int64]]?, arrayArrayOfModel: [[ReadOnlyFirst]]?) {
        self.arrayOfString = arrayOfString
        self.arrayArrayOfInteger = arrayArrayOfInteger
        self.arrayArrayOfModel = arrayArrayOfModel
    }

    internal enum CodingKeys: String, CodingKey { 
        case arrayOfString = "array_of_string"
        case arrayArrayOfInteger = "array_array_of_integer"
        case arrayArrayOfModel = "array_array_of_model"
    }

}
