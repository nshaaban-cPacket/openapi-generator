//
// Dog.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

public struct Dog: Codable, Hashable {

    public private(set) var className: String
    public private(set) var color: String? = "red"
    public private(set) var breed: String?

    public init(className: String, color: String? = "red", breed: String? = nil) {
        self.className = className
        self.color = color
        self.breed = breed
    }
    public enum CodingKeys: String, CodingKey, CaseIterable {
        case className
        case color
        case breed
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(className, forKey: .className)
        try container.encodeIfPresent(color, forKey: .color)
        try container.encodeIfPresent(breed, forKey: .breed)
    }



}
