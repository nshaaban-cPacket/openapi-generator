<?php

/**
 * Model200ResponseTest
 *
 * PHP version 7.1
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */

/**
 * OpenAPI Petstore
 *
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
use OpenAPIServer\Model\Model200Response;

/**
 * Model200ResponseTest Class Doc Comment
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 *
 * @coversDefaultClass \OpenAPIServer\Model\Model200Response
 */
class Model200ResponseTest extends TestCase
{

    /**
     * Setup before running any test cases
     */
    public static function setUpBeforeClass()
    {
    }

    /**
     * Setup before running each test case
     */
    public function setUp()
    {
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown()
    {
    }

    /**
     * Clean up after running all test cases
     */
    public static function tearDownAfterClass()
    {
    }

    /**
     * Test "Model200Response"
     */
    public function testModel200Response()
    {
        $testModel200Response = new Model200Response();
        $this->markTestIncomplete(
            'Test of "Model200Response" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $this->markTestIncomplete(
            'Test of "name" property in "Model200Response" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "class"
     */
    public function testPropertyClass()
    {
        $this->markTestIncomplete(
            'Test of "class" property in "Model200Response" model has not been implemented yet.'
        );
    }

    /**
     * Test getOpenApiSchema static method
     * @covers ::getOpenApiSchema
     */
    public function testGetOpenApiSchema()
    {
        $schemaObject = Model200Response::getOpenApiSchema();
        $schemaArr = Model200Response::getOpenApiSchema(true);
        $this->assertIsObject($schemaObject);
        $this->assertIsArray($schemaArr);
    }
}
