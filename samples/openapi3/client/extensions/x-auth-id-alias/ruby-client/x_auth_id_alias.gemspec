# -*- encoding: utf-8 -*-

=begin
#OpenAPI Extension x-auth-id-alias

#This specification shows how to use x-auth-id-alias extension for API keys.

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.2.1

=end

$:.push File.expand_path("../lib", __FILE__)
require "x_auth_id_alias/version"

Gem::Specification.new do |s|
  s.name        = "x_auth_id_alias"
  s.version     = XAuthIDAlias::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["OpenAPI-Generator"]
  s.email       = [""]
  s.homepage    = "https://openapi-generator.tech"
  s.summary     = "OpenAPI Extension x-auth-id-alias Ruby Gem"
  s.description = "This specification shows how to use x-auth-id-alias extension for API keys."
  s.license     = "Unlicense"
  s.required_ruby_version = ">= 2.4"

  s.add_runtime_dependency 'typhoeus', '~> 1.0', '>= 1.0.1'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.test_files    = `find spec/*`.split("\n")
  s.executables   = []
  s.require_paths = ["lib"]
end
