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

# Unit tests for Petstore::List
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'List' do
  before do
    # run before each test
    @instance = Petstore::List.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of List' do
    it 'should create an instance of List' do
      expect(@instance).to be_instance_of(Petstore::List)
    end
  end
  describe 'test attribute "_123_list"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
