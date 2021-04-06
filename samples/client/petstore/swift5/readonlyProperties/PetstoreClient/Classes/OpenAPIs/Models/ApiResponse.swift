//
// ApiResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

public struct ApiResponse: Codable, Hashable {

    public private(set) var code: Int?
    public private(set) var type: String?
    public private(set) var message: String?

    public init(code: Int? = nil, type: String? = nil, message: String? = nil) {
        self.code = code
        self.type = type
        self.message = message
    }

}
