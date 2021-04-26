//
// Cat.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import AnyCodable

public struct Cat: Codable, Hashable {

    public var className: String
    public var color: String? = "red"
    public var declawed: Bool?

    public init(className: String, color: String? = "red", declawed: Bool? = nil) {
        self.className = className
        self.color = color
        self.declawed = declawed
    }
    public enum CodingKeys: String, CodingKey, CaseIterable {
        case className
        case color
        case declawed
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(className, forKey: .className)
        try container.encodeIfPresent(color, forKey: .color)
        try container.encodeIfPresent(declawed, forKey: .declawed)
    }



}
