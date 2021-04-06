//
// MixedPropertiesAndAdditionalPropertiesClass.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

public struct MixedPropertiesAndAdditionalPropertiesClass: Codable, Hashable {

    public private(set) var uuid: UUID?
    public private(set) var dateTime: Date?
    public private(set) var map: [String: Animal]?

    public init(uuid: UUID? = nil, dateTime: Date? = nil, map: [String: Animal]? = nil) {
        self.uuid = uuid
        self.dateTime = dateTime
        self.map = map
    }

}
