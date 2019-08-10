<?php
/**
 * XmlItem
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 4.1.1-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * XmlItem Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class XmlItem implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'XmlItem';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'attribute_string' => 'string',
        'attribute_number' => 'float',
        'attribute_integer' => 'int',
        'attribute_boolean' => 'bool',
        'wrapped_array' => 'int[]',
        'name_string' => 'string',
        'name_number' => 'float',
        'name_integer' => 'int',
        'name_boolean' => 'bool',
        'name_array' => 'int[]',
        'name_wrapped_array' => 'int[]',
        'prefix_string' => 'string',
        'prefix_number' => 'float',
        'prefix_integer' => 'int',
        'prefix_boolean' => 'bool',
        'prefix_array' => 'int[]',
        'prefix_wrapped_array' => 'int[]',
        'namespace_string' => 'string',
        'namespace_number' => 'float',
        'namespace_integer' => 'int',
        'namespace_boolean' => 'bool',
        'namespace_array' => 'int[]',
        'namespace_wrapped_array' => 'int[]',
        'prefix_ns_string' => 'string',
        'prefix_ns_number' => 'float',
        'prefix_ns_integer' => 'int',
        'prefix_ns_boolean' => 'bool',
        'prefix_ns_array' => 'int[]',
        'prefix_ns_wrapped_array' => 'int[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'attribute_string' => null,
        'attribute_number' => null,
        'attribute_integer' => null,
        'attribute_boolean' => null,
        'wrapped_array' => null,
        'name_string' => null,
        'name_number' => null,
        'name_integer' => null,
        'name_boolean' => null,
        'name_array' => null,
        'name_wrapped_array' => null,
        'prefix_string' => null,
        'prefix_number' => null,
        'prefix_integer' => null,
        'prefix_boolean' => null,
        'prefix_array' => null,
        'prefix_wrapped_array' => null,
        'namespace_string' => null,
        'namespace_number' => null,
        'namespace_integer' => null,
        'namespace_boolean' => null,
        'namespace_array' => null,
        'namespace_wrapped_array' => null,
        'prefix_ns_string' => null,
        'prefix_ns_number' => null,
        'prefix_ns_integer' => null,
        'prefix_ns_boolean' => null,
        'prefix_ns_array' => null,
        'prefix_ns_wrapped_array' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'attribute_string' => 'attribute_string',
        'attribute_number' => 'attribute_number',
        'attribute_integer' => 'attribute_integer',
        'attribute_boolean' => 'attribute_boolean',
        'wrapped_array' => 'wrapped_array',
        'name_string' => 'name_string',
        'name_number' => 'name_number',
        'name_integer' => 'name_integer',
        'name_boolean' => 'name_boolean',
        'name_array' => 'name_array',
        'name_wrapped_array' => 'name_wrapped_array',
        'prefix_string' => 'prefix_string',
        'prefix_number' => 'prefix_number',
        'prefix_integer' => 'prefix_integer',
        'prefix_boolean' => 'prefix_boolean',
        'prefix_array' => 'prefix_array',
        'prefix_wrapped_array' => 'prefix_wrapped_array',
        'namespace_string' => 'namespace_string',
        'namespace_number' => 'namespace_number',
        'namespace_integer' => 'namespace_integer',
        'namespace_boolean' => 'namespace_boolean',
        'namespace_array' => 'namespace_array',
        'namespace_wrapped_array' => 'namespace_wrapped_array',
        'prefix_ns_string' => 'prefix_ns_string',
        'prefix_ns_number' => 'prefix_ns_number',
        'prefix_ns_integer' => 'prefix_ns_integer',
        'prefix_ns_boolean' => 'prefix_ns_boolean',
        'prefix_ns_array' => 'prefix_ns_array',
        'prefix_ns_wrapped_array' => 'prefix_ns_wrapped_array'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'attribute_string' => 'setAttributeString',
        'attribute_number' => 'setAttributeNumber',
        'attribute_integer' => 'setAttributeInteger',
        'attribute_boolean' => 'setAttributeBoolean',
        'wrapped_array' => 'setWrappedArray',
        'name_string' => 'setNameString',
        'name_number' => 'setNameNumber',
        'name_integer' => 'setNameInteger',
        'name_boolean' => 'setNameBoolean',
        'name_array' => 'setNameArray',
        'name_wrapped_array' => 'setNameWrappedArray',
        'prefix_string' => 'setPrefixString',
        'prefix_number' => 'setPrefixNumber',
        'prefix_integer' => 'setPrefixInteger',
        'prefix_boolean' => 'setPrefixBoolean',
        'prefix_array' => 'setPrefixArray',
        'prefix_wrapped_array' => 'setPrefixWrappedArray',
        'namespace_string' => 'setNamespaceString',
        'namespace_number' => 'setNamespaceNumber',
        'namespace_integer' => 'setNamespaceInteger',
        'namespace_boolean' => 'setNamespaceBoolean',
        'namespace_array' => 'setNamespaceArray',
        'namespace_wrapped_array' => 'setNamespaceWrappedArray',
        'prefix_ns_string' => 'setPrefixNsString',
        'prefix_ns_number' => 'setPrefixNsNumber',
        'prefix_ns_integer' => 'setPrefixNsInteger',
        'prefix_ns_boolean' => 'setPrefixNsBoolean',
        'prefix_ns_array' => 'setPrefixNsArray',
        'prefix_ns_wrapped_array' => 'setPrefixNsWrappedArray'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'attribute_string' => 'getAttributeString',
        'attribute_number' => 'getAttributeNumber',
        'attribute_integer' => 'getAttributeInteger',
        'attribute_boolean' => 'getAttributeBoolean',
        'wrapped_array' => 'getWrappedArray',
        'name_string' => 'getNameString',
        'name_number' => 'getNameNumber',
        'name_integer' => 'getNameInteger',
        'name_boolean' => 'getNameBoolean',
        'name_array' => 'getNameArray',
        'name_wrapped_array' => 'getNameWrappedArray',
        'prefix_string' => 'getPrefixString',
        'prefix_number' => 'getPrefixNumber',
        'prefix_integer' => 'getPrefixInteger',
        'prefix_boolean' => 'getPrefixBoolean',
        'prefix_array' => 'getPrefixArray',
        'prefix_wrapped_array' => 'getPrefixWrappedArray',
        'namespace_string' => 'getNamespaceString',
        'namespace_number' => 'getNamespaceNumber',
        'namespace_integer' => 'getNamespaceInteger',
        'namespace_boolean' => 'getNamespaceBoolean',
        'namespace_array' => 'getNamespaceArray',
        'namespace_wrapped_array' => 'getNamespaceWrappedArray',
        'prefix_ns_string' => 'getPrefixNsString',
        'prefix_ns_number' => 'getPrefixNsNumber',
        'prefix_ns_integer' => 'getPrefixNsInteger',
        'prefix_ns_boolean' => 'getPrefixNsBoolean',
        'prefix_ns_array' => 'getPrefixNsArray',
        'prefix_ns_wrapped_array' => 'getPrefixNsWrappedArray'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['attribute_string'] = isset($data['attribute_string']) ? $data['attribute_string'] : null;
        $this->container['attribute_number'] = isset($data['attribute_number']) ? $data['attribute_number'] : null;
        $this->container['attribute_integer'] = isset($data['attribute_integer']) ? $data['attribute_integer'] : null;
        $this->container['attribute_boolean'] = isset($data['attribute_boolean']) ? $data['attribute_boolean'] : null;
        $this->container['wrapped_array'] = isset($data['wrapped_array']) ? $data['wrapped_array'] : null;
        $this->container['name_string'] = isset($data['name_string']) ? $data['name_string'] : null;
        $this->container['name_number'] = isset($data['name_number']) ? $data['name_number'] : null;
        $this->container['name_integer'] = isset($data['name_integer']) ? $data['name_integer'] : null;
        $this->container['name_boolean'] = isset($data['name_boolean']) ? $data['name_boolean'] : null;
        $this->container['name_array'] = isset($data['name_array']) ? $data['name_array'] : null;
        $this->container['name_wrapped_array'] = isset($data['name_wrapped_array']) ? $data['name_wrapped_array'] : null;
        $this->container['prefix_string'] = isset($data['prefix_string']) ? $data['prefix_string'] : null;
        $this->container['prefix_number'] = isset($data['prefix_number']) ? $data['prefix_number'] : null;
        $this->container['prefix_integer'] = isset($data['prefix_integer']) ? $data['prefix_integer'] : null;
        $this->container['prefix_boolean'] = isset($data['prefix_boolean']) ? $data['prefix_boolean'] : null;
        $this->container['prefix_array'] = isset($data['prefix_array']) ? $data['prefix_array'] : null;
        $this->container['prefix_wrapped_array'] = isset($data['prefix_wrapped_array']) ? $data['prefix_wrapped_array'] : null;
        $this->container['namespace_string'] = isset($data['namespace_string']) ? $data['namespace_string'] : null;
        $this->container['namespace_number'] = isset($data['namespace_number']) ? $data['namespace_number'] : null;
        $this->container['namespace_integer'] = isset($data['namespace_integer']) ? $data['namespace_integer'] : null;
        $this->container['namespace_boolean'] = isset($data['namespace_boolean']) ? $data['namespace_boolean'] : null;
        $this->container['namespace_array'] = isset($data['namespace_array']) ? $data['namespace_array'] : null;
        $this->container['namespace_wrapped_array'] = isset($data['namespace_wrapped_array']) ? $data['namespace_wrapped_array'] : null;
        $this->container['prefix_ns_string'] = isset($data['prefix_ns_string']) ? $data['prefix_ns_string'] : null;
        $this->container['prefix_ns_number'] = isset($data['prefix_ns_number']) ? $data['prefix_ns_number'] : null;
        $this->container['prefix_ns_integer'] = isset($data['prefix_ns_integer']) ? $data['prefix_ns_integer'] : null;
        $this->container['prefix_ns_boolean'] = isset($data['prefix_ns_boolean']) ? $data['prefix_ns_boolean'] : null;
        $this->container['prefix_ns_array'] = isset($data['prefix_ns_array']) ? $data['prefix_ns_array'] : null;
        $this->container['prefix_ns_wrapped_array'] = isset($data['prefix_ns_wrapped_array']) ? $data['prefix_ns_wrapped_array'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets attribute_string
     *
     * @return string|null
     */
    public function getAttributeString()
    {
        return $this->container['attribute_string'];
    }

    /**
     * Sets attribute_string
     *
     * @param string|null $attribute_string attribute_string
     *
     * @return $this
     */
    public function setAttributeString($attribute_string)
    {
        $this->container['attribute_string'] = $attribute_string;

        return $this;
    }

    /**
     * Gets attribute_number
     *
     * @return float|null
     */
    public function getAttributeNumber()
    {
        return $this->container['attribute_number'];
    }

    /**
     * Sets attribute_number
     *
     * @param float|null $attribute_number attribute_number
     *
     * @return $this
     */
    public function setAttributeNumber($attribute_number)
    {
        $this->container['attribute_number'] = $attribute_number;

        return $this;
    }

    /**
     * Gets attribute_integer
     *
     * @return int|null
     */
    public function getAttributeInteger()
    {
        return $this->container['attribute_integer'];
    }

    /**
     * Sets attribute_integer
     *
     * @param int|null $attribute_integer attribute_integer
     *
     * @return $this
     */
    public function setAttributeInteger($attribute_integer)
    {
        $this->container['attribute_integer'] = $attribute_integer;

        return $this;
    }

    /**
     * Gets attribute_boolean
     *
     * @return bool|null
     */
    public function getAttributeBoolean()
    {
        return $this->container['attribute_boolean'];
    }

    /**
     * Sets attribute_boolean
     *
     * @param bool|null $attribute_boolean attribute_boolean
     *
     * @return $this
     */
    public function setAttributeBoolean($attribute_boolean)
    {
        $this->container['attribute_boolean'] = $attribute_boolean;

        return $this;
    }

    /**
     * Gets wrapped_array
     *
     * @return int[]|null
     */
    public function getWrappedArray()
    {
        return $this->container['wrapped_array'];
    }

    /**
     * Sets wrapped_array
     *
     * @param int[]|null $wrapped_array wrapped_array
     *
     * @return $this
     */
    public function setWrappedArray($wrapped_array)
    {
        $this->container['wrapped_array'] = $wrapped_array;

        return $this;
    }

    /**
     * Gets name_string
     *
     * @return string|null
     */
    public function getNameString()
    {
        return $this->container['name_string'];
    }

    /**
     * Sets name_string
     *
     * @param string|null $name_string name_string
     *
     * @return $this
     */
    public function setNameString($name_string)
    {
        $this->container['name_string'] = $name_string;

        return $this;
    }

    /**
     * Gets name_number
     *
     * @return float|null
     */
    public function getNameNumber()
    {
        return $this->container['name_number'];
    }

    /**
     * Sets name_number
     *
     * @param float|null $name_number name_number
     *
     * @return $this
     */
    public function setNameNumber($name_number)
    {
        $this->container['name_number'] = $name_number;

        return $this;
    }

    /**
     * Gets name_integer
     *
     * @return int|null
     */
    public function getNameInteger()
    {
        return $this->container['name_integer'];
    }

    /**
     * Sets name_integer
     *
     * @param int|null $name_integer name_integer
     *
     * @return $this
     */
    public function setNameInteger($name_integer)
    {
        $this->container['name_integer'] = $name_integer;

        return $this;
    }

    /**
     * Gets name_boolean
     *
     * @return bool|null
     */
    public function getNameBoolean()
    {
        return $this->container['name_boolean'];
    }

    /**
     * Sets name_boolean
     *
     * @param bool|null $name_boolean name_boolean
     *
     * @return $this
     */
    public function setNameBoolean($name_boolean)
    {
        $this->container['name_boolean'] = $name_boolean;

        return $this;
    }

    /**
     * Gets name_array
     *
     * @return int[]|null
     */
    public function getNameArray()
    {
        return $this->container['name_array'];
    }

    /**
     * Sets name_array
     *
     * @param int[]|null $name_array name_array
     *
     * @return $this
     */
    public function setNameArray($name_array)
    {
        $this->container['name_array'] = $name_array;

        return $this;
    }

    /**
     * Gets name_wrapped_array
     *
     * @return int[]|null
     */
    public function getNameWrappedArray()
    {
        return $this->container['name_wrapped_array'];
    }

    /**
     * Sets name_wrapped_array
     *
     * @param int[]|null $name_wrapped_array name_wrapped_array
     *
     * @return $this
     */
    public function setNameWrappedArray($name_wrapped_array)
    {
        $this->container['name_wrapped_array'] = $name_wrapped_array;

        return $this;
    }

    /**
     * Gets prefix_string
     *
     * @return string|null
     */
    public function getPrefixString()
    {
        return $this->container['prefix_string'];
    }

    /**
     * Sets prefix_string
     *
     * @param string|null $prefix_string prefix_string
     *
     * @return $this
     */
    public function setPrefixString($prefix_string)
    {
        $this->container['prefix_string'] = $prefix_string;

        return $this;
    }

    /**
     * Gets prefix_number
     *
     * @return float|null
     */
    public function getPrefixNumber()
    {
        return $this->container['prefix_number'];
    }

    /**
     * Sets prefix_number
     *
     * @param float|null $prefix_number prefix_number
     *
     * @return $this
     */
    public function setPrefixNumber($prefix_number)
    {
        $this->container['prefix_number'] = $prefix_number;

        return $this;
    }

    /**
     * Gets prefix_integer
     *
     * @return int|null
     */
    public function getPrefixInteger()
    {
        return $this->container['prefix_integer'];
    }

    /**
     * Sets prefix_integer
     *
     * @param int|null $prefix_integer prefix_integer
     *
     * @return $this
     */
    public function setPrefixInteger($prefix_integer)
    {
        $this->container['prefix_integer'] = $prefix_integer;

        return $this;
    }

    /**
     * Gets prefix_boolean
     *
     * @return bool|null
     */
    public function getPrefixBoolean()
    {
        return $this->container['prefix_boolean'];
    }

    /**
     * Sets prefix_boolean
     *
     * @param bool|null $prefix_boolean prefix_boolean
     *
     * @return $this
     */
    public function setPrefixBoolean($prefix_boolean)
    {
        $this->container['prefix_boolean'] = $prefix_boolean;

        return $this;
    }

    /**
     * Gets prefix_array
     *
     * @return int[]|null
     */
    public function getPrefixArray()
    {
        return $this->container['prefix_array'];
    }

    /**
     * Sets prefix_array
     *
     * @param int[]|null $prefix_array prefix_array
     *
     * @return $this
     */
    public function setPrefixArray($prefix_array)
    {
        $this->container['prefix_array'] = $prefix_array;

        return $this;
    }

    /**
     * Gets prefix_wrapped_array
     *
     * @return int[]|null
     */
    public function getPrefixWrappedArray()
    {
        return $this->container['prefix_wrapped_array'];
    }

    /**
     * Sets prefix_wrapped_array
     *
     * @param int[]|null $prefix_wrapped_array prefix_wrapped_array
     *
     * @return $this
     */
    public function setPrefixWrappedArray($prefix_wrapped_array)
    {
        $this->container['prefix_wrapped_array'] = $prefix_wrapped_array;

        return $this;
    }

    /**
     * Gets namespace_string
     *
     * @return string|null
     */
    public function getNamespaceString()
    {
        return $this->container['namespace_string'];
    }

    /**
     * Sets namespace_string
     *
     * @param string|null $namespace_string namespace_string
     *
     * @return $this
     */
    public function setNamespaceString($namespace_string)
    {
        $this->container['namespace_string'] = $namespace_string;

        return $this;
    }

    /**
     * Gets namespace_number
     *
     * @return float|null
     */
    public function getNamespaceNumber()
    {
        return $this->container['namespace_number'];
    }

    /**
     * Sets namespace_number
     *
     * @param float|null $namespace_number namespace_number
     *
     * @return $this
     */
    public function setNamespaceNumber($namespace_number)
    {
        $this->container['namespace_number'] = $namespace_number;

        return $this;
    }

    /**
     * Gets namespace_integer
     *
     * @return int|null
     */
    public function getNamespaceInteger()
    {
        return $this->container['namespace_integer'];
    }

    /**
     * Sets namespace_integer
     *
     * @param int|null $namespace_integer namespace_integer
     *
     * @return $this
     */
    public function setNamespaceInteger($namespace_integer)
    {
        $this->container['namespace_integer'] = $namespace_integer;

        return $this;
    }

    /**
     * Gets namespace_boolean
     *
     * @return bool|null
     */
    public function getNamespaceBoolean()
    {
        return $this->container['namespace_boolean'];
    }

    /**
     * Sets namespace_boolean
     *
     * @param bool|null $namespace_boolean namespace_boolean
     *
     * @return $this
     */
    public function setNamespaceBoolean($namespace_boolean)
    {
        $this->container['namespace_boolean'] = $namespace_boolean;

        return $this;
    }

    /**
     * Gets namespace_array
     *
     * @return int[]|null
     */
    public function getNamespaceArray()
    {
        return $this->container['namespace_array'];
    }

    /**
     * Sets namespace_array
     *
     * @param int[]|null $namespace_array namespace_array
     *
     * @return $this
     */
    public function setNamespaceArray($namespace_array)
    {
        $this->container['namespace_array'] = $namespace_array;

        return $this;
    }

    /**
     * Gets namespace_wrapped_array
     *
     * @return int[]|null
     */
    public function getNamespaceWrappedArray()
    {
        return $this->container['namespace_wrapped_array'];
    }

    /**
     * Sets namespace_wrapped_array
     *
     * @param int[]|null $namespace_wrapped_array namespace_wrapped_array
     *
     * @return $this
     */
    public function setNamespaceWrappedArray($namespace_wrapped_array)
    {
        $this->container['namespace_wrapped_array'] = $namespace_wrapped_array;

        return $this;
    }

    /**
     * Gets prefix_ns_string
     *
     * @return string|null
     */
    public function getPrefixNsString()
    {
        return $this->container['prefix_ns_string'];
    }

    /**
     * Sets prefix_ns_string
     *
     * @param string|null $prefix_ns_string prefix_ns_string
     *
     * @return $this
     */
    public function setPrefixNsString($prefix_ns_string)
    {
        $this->container['prefix_ns_string'] = $prefix_ns_string;

        return $this;
    }

    /**
     * Gets prefix_ns_number
     *
     * @return float|null
     */
    public function getPrefixNsNumber()
    {
        return $this->container['prefix_ns_number'];
    }

    /**
     * Sets prefix_ns_number
     *
     * @param float|null $prefix_ns_number prefix_ns_number
     *
     * @return $this
     */
    public function setPrefixNsNumber($prefix_ns_number)
    {
        $this->container['prefix_ns_number'] = $prefix_ns_number;

        return $this;
    }

    /**
     * Gets prefix_ns_integer
     *
     * @return int|null
     */
    public function getPrefixNsInteger()
    {
        return $this->container['prefix_ns_integer'];
    }

    /**
     * Sets prefix_ns_integer
     *
     * @param int|null $prefix_ns_integer prefix_ns_integer
     *
     * @return $this
     */
    public function setPrefixNsInteger($prefix_ns_integer)
    {
        $this->container['prefix_ns_integer'] = $prefix_ns_integer;

        return $this;
    }

    /**
     * Gets prefix_ns_boolean
     *
     * @return bool|null
     */
    public function getPrefixNsBoolean()
    {
        return $this->container['prefix_ns_boolean'];
    }

    /**
     * Sets prefix_ns_boolean
     *
     * @param bool|null $prefix_ns_boolean prefix_ns_boolean
     *
     * @return $this
     */
    public function setPrefixNsBoolean($prefix_ns_boolean)
    {
        $this->container['prefix_ns_boolean'] = $prefix_ns_boolean;

        return $this;
    }

    /**
     * Gets prefix_ns_array
     *
     * @return int[]|null
     */
    public function getPrefixNsArray()
    {
        return $this->container['prefix_ns_array'];
    }

    /**
     * Sets prefix_ns_array
     *
     * @param int[]|null $prefix_ns_array prefix_ns_array
     *
     * @return $this
     */
    public function setPrefixNsArray($prefix_ns_array)
    {
        $this->container['prefix_ns_array'] = $prefix_ns_array;

        return $this;
    }

    /**
     * Gets prefix_ns_wrapped_array
     *
     * @return int[]|null
     */
    public function getPrefixNsWrappedArray()
    {
        return $this->container['prefix_ns_wrapped_array'];
    }

    /**
     * Sets prefix_ns_wrapped_array
     *
     * @param int[]|null $prefix_ns_wrapped_array prefix_ns_wrapped_array
     *
     * @return $this
     */
    public function setPrefixNsWrappedArray($prefix_ns_wrapped_array)
    {
        $this->container['prefix_ns_wrapped_array'] = $prefix_ns_wrapped_array;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }
}


