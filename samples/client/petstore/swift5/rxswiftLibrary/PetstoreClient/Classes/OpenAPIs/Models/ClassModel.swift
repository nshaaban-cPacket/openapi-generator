//
// ClassModel.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

/** Model for testing model with \&quot;_class\&quot; property */
public struct ClassModel: Codable, Hashable {

    public var `class`: String?

    public init(`class`: String? = nil) {
        self.`class` = `class`
    }
    public enum CodingKeys: String, CodingKey, CaseIterable {
        case `class` = "_class"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(`class`, forKey: .`class`)
    }



}
