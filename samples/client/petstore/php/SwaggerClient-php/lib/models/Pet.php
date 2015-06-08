<?php
/**
 *  Copyright 2015 SmartBear Software
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

    
/**
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program. Do not edit the class manually.
 *
 */

namespace SwaggerClient\models;

use \ArrayAccess;

class Pet implements ArrayAccess {
  static $swaggerTypes = array(
      'id' => 'int',
    'category' => 'Category',
    'name' => 'string',
    'photo_urls' => 'array[string]',
    'tags' => 'array[Tag]',
    'status' => 'string'
    );

    static $attributeMap = array(
    'id' => 'id',
    'category' => 'category',
    'name' => 'name',
    'photo_urls' => 'photoUrls',
    'tags' => 'tags',
    'status' => 'status'
    );

    
    public $id; /* int */
    public $category; /* Category */
    public $name; /* string */
    public $photo_urls; /* array[string] */
    public $tags; /* array[Tag] */
        /**
        * pet status in the store
        */
    public $status; /* string */

    public function __construct(array $data = null) {
    $this->id = $data["id"];
    $this->category = $data["category"];
    $this->name = $data["name"];
    $this->photo_urls = $data["photo_urls"];
    $this->tags = $data["tags"];
    $this->status = $data["status"];
    }

    public function offsetExists($offset) {
    return isset($this->$offset);
    }

    public function offsetGet($offset) {
    return $this->$offset;
    }

    public function offsetSet($offset, $value) {
    $this->$offset = $value;
    }

    public function offsetUnset($offset) {
    unset($this->$offset);
    }
    }
    
