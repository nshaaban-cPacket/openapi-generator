=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
<<<<<<< HEAD
OpenAPI Generator version: 5.0.0-SNAPSHOT
=======
<<<<<<< HEAD
OpenAPI Generator version: 4.3.0-SNAPSHOT
=======
OpenAPI Generator version: 4.2.2-SNAPSHOT
>>>>>>> origin/master
>>>>>>> 4.3.x

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::InlineObject
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'InlineObject' do
  before do
    # run before each test
    @instance = Petstore::InlineObject.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of InlineObject' do
    it 'should create an instance of InlineObject' do
      expect(@instance).to be_instance_of(Petstore::InlineObject)
    end
  end
  describe 'test attribute "name"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "status"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
