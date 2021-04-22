//
// FormatTest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

internal struct FormatTest: Codable, Hashable {

    internal var integer: Int?
    internal var int32: Int?
    internal var int64: Int64?
    internal var number: Double
    internal var float: Float?
    internal var double: Double?
    internal var string: String?
    internal var byte: Data
    internal var binary: Data?
    internal var date: Date
    internal var dateTime: Date?
    internal var uuid: UUID?
    internal var password: String

    internal init(integer: Int? = nil, int32: Int? = nil, int64: Int64? = nil, number: Double, float: Float? = nil, double: Double? = nil, string: String? = nil, byte: Data, binary: Data? = nil, date: Date, dateTime: Date? = nil, uuid: UUID? = nil, password: String) {
        self.integer = integer
        self.int32 = int32
        self.int64 = int64
        self.number = number
        self.float = float
        self.double = double
        self.string = string
        self.byte = byte
        self.binary = binary
        self.date = date
        self.dateTime = dateTime
        self.uuid = uuid
        self.password = password
    }

}
