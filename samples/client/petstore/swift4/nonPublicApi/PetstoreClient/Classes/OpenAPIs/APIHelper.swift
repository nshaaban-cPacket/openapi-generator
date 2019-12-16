// APIHelper.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

internal struct APIHelper {
    internal static func rejectNil(_ source: [String:Any?]) -> [String:Any]? {
        let destination = source.reduce(into: [String: Any]()) { (result, item) in
            if let value = item.value {
                result[item.key] = value
            }
        }

        if destination.isEmpty {
            return nil
        }
        return destination
    }

    internal static func rejectNilHeaders(_ source: [String:Any?]) -> [String:String] {
        return source.reduce(into: [String: String]()) { (result, item) in
            if let collection = item.value as? Array<Any?> {
                result[item.key] = collection.filter({ $0 != nil }).map{ "\($0!)" }.joined(separator: ",")
            } else if let value: Any = item.value {
                result[item.key] = "\(value)"
            }
        }
    }

    internal static func convertBoolToString(_ source: [String: Any]?) -> [String:Any]? {
        guard let source = source else {
            return nil
        }

        return source.reduce(into: [String: Any](), { (result, item) in
            switch item.value {
            case let x as Bool:
                result[item.key] = x.description
            default:
                result[item.key] = item.value
            }
        })
    }

    internal static func mapValueToPathItem(_ source: Any) -> Any {
        if let collection = source as? Array<Any?> {
            return collection.filter({ $0 != nil }).map({"\($0!)"}).joined(separator: ",")
        }
        return source
    }

    internal static func mapValuesToQueryItems(_ source: [String:Any?]) -> [URLQueryItem]? {
        let destination = source.filter({ $0.value != nil}).reduce(into: [URLQueryItem]()) { (result, item) in
            if let collection = item.value as? Array<Any?> {
                let value = collection.filter({ $0 != nil }).map({"\($0!)"}).joined(separator: ",")
                result.append(URLQueryItem(name: item.key, value: value))
            } else if let value = item.value {
                result.append(URLQueryItem(name: item.key, value: "\(value)"))
            }
        }

        if destination.isEmpty {
            return nil
        }
        return destination
    }
}

