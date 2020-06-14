<?php

/**
 * ReadOnlyFirstTest
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
use OpenAPIServer\Model\ReadOnlyFirst;

/**
 * ReadOnlyFirstTest Class Doc Comment
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 *
 * @coversDefaultClass \OpenAPIServer\Model\ReadOnlyFirst
 */
class ReadOnlyFirstTest extends TestCase
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
     * Test "ReadOnlyFirst"
     */
    public function testReadOnlyFirst()
    {
        $testReadOnlyFirst = new ReadOnlyFirst();
        $this->markTestIncomplete(
            'Test of "ReadOnlyFirst" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "bar"
     */
    public function testPropertyBar()
    {
        $this->markTestIncomplete(
            'Test of "bar" property in "ReadOnlyFirst" model has not been implemented yet.'
        );
    }

    /**
     * Test attribute "baz"
     */
    public function testPropertyBaz()
    {
        $this->markTestIncomplete(
            'Test of "baz" property in "ReadOnlyFirst" model has not been implemented yet.'
        );
    }

    /**
     * Test getOpenApiSchema static method
     * @covers ::getOpenApiSchema
     */
    public function testGetOpenApiSchema()
    {
        $schemaObject = ReadOnlyFirst::getOpenApiSchema();
        $schemaArr = ReadOnlyFirst::getOpenApiSchema(true);
        $this->assertIsObject($schemaObject);
        $this->assertIsArray($schemaArr);
    }
}
