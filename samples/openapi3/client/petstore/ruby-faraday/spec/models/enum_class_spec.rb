=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
<<<<<<< HEAD
OpenAPI Generator version: 5.0.0-SNAPSHOT
=======
OpenAPI Generator version: 4.3.1-SNAPSHOT
>>>>>>> origin/master

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::EnumClass
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'EnumClass' do
  before do
    # run before each test
    @instance = Petstore::EnumClass.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of EnumClass' do
    it 'should create an instance of EnumClass' do
      expect(@instance).to be_instance_of(Petstore::EnumClass)
    end
  end
end
