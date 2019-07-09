=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.0.3

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::MixedPropertiesAndAdditionalPropertiesClass
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'MixedPropertiesAndAdditionalPropertiesClass' do
  before do
    # run before each test
    @instance = Petstore::MixedPropertiesAndAdditionalPropertiesClass.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of MixedPropertiesAndAdditionalPropertiesClass' do
    it 'should create an instance of MixedPropertiesAndAdditionalPropertiesClass' do
      expect(@instance).to be_instance_of(Petstore::MixedPropertiesAndAdditionalPropertiesClass)
    end
  end
  describe 'test attribute "uuid"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "date_time"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "map"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
