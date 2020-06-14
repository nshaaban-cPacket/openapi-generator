<?php

/**
 * OpenAPI Petstore
 * PHP version 7.2
 *
 * @package OpenAPIServer
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */

/**
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

/**
 * NOTE: This class is auto generated by the openapi generator program.
 * https://github.com/openapitools/openapi-generator
 * Please update the test case below to test the model.
 */
namespace OpenAPIServer\Model;

use PHPUnit\Framework\TestCase;
use OpenAPIServer\Model\AdditionalPropertiesClass;

/**
 * AdditionalPropertiesClassTest Class Doc Comment
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 *
 * @coversDefaultClass \OpenAPIServer\Model\AdditionalPropertiesClass
 */
class AdditionalPropertiesClassTest extends TestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass(): void
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass(): void
    {
    }

    /**
     * Test "AdditionalPropertiesClass"
     */
    public function testAdditionalPropertiesClass()
    {
        $testAdditionalPropertiesClass = new AdditionalPropertiesClass();
        $this->markTestIncomplete(
            'Test of "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapString"
     */
    public function testPropertyMapString()
    {
        $this->markTestIncomplete(
            'Test of "mapString" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapNumber"
     */
    public function testPropertyMapNumber()
    {
        $this->markTestIncomplete(
            'Test of "mapNumber" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapInteger"
     */
    public function testPropertyMapInteger()
    {
        $this->markTestIncomplete(
            'Test of "mapInteger" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapBoolean"
     */
    public function testPropertyMapBoolean()
    {
        $this->markTestIncomplete(
            'Test of "mapBoolean" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapArrayInteger"
     */
    public function testPropertyMapArrayInteger()
    {
        $this->markTestIncomplete(
            'Test of "mapArrayInteger" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapArrayAnytype"
     */
    public function testPropertyMapArrayAnytype()
    {
        $this->markTestIncomplete(
            'Test of "mapArrayAnytype" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapMapString"
     */
    public function testPropertyMapMapString()
    {
        $this->markTestIncomplete(
            'Test of "mapMapString" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "mapMapAnytype"
     */
    public function testPropertyMapMapAnytype()
    {
        $this->markTestIncomplete(
            'Test of "mapMapAnytype" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "anytype1"
     */
    public function testPropertyAnytype1()
    {
        $this->markTestIncomplete(
            'Test of "anytype1" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "anytype2"
     */
    public function testPropertyAnytype2()
    {
        $this->markTestIncomplete(
            'Test of "anytype2" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "anytype3"
     */
    public function testPropertyAnytype3()
    {
        $this->markTestIncomplete(
            'Test of "anytype3" property in "AdditionalPropertiesClass" model has not been implemented yet.'
        );
    }

    /**
     * Test getOpenApiSchema static method
     * @covers ::getOpenApiSchema
     */
    public function testGetOpenApiSchema()
    {
        $schemaObject = AdditionalPropertiesClass::getOpenApiSchema();
        $schemaArr = AdditionalPropertiesClass::getOpenApiSchema(true);
        $this->assertIsObject($schemaObject);
        $this->assertIsArray($schemaArr);
    }
}
