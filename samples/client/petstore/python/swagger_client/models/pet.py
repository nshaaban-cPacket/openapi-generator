#!/usr/bin/env python
# coding: utf-8

"""
Copyright 2015 SmartBear Software

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
"""


class Pet(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self):
        """
        Swagger model

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'int',
            'category': 'Category',
            'name': 'str',
            'photo_urls': 'list[str]',
            'tags': 'list[Tag]',
            'status': 'str'
        }

        self.attribute_map = {
            'id': 'id',
            'category': 'category',
            'name': 'name',
            'photo_urls': 'photoUrls',
            'tags': 'tags',
            'status': 'status'
        }

        self._id = None
        self._category = None
        self._name = None
        self._photo_urls = None
        self._tags = None
        self._status = None    # pet status in the store

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, id):
        self._id = id

    @property
    def category(self):
        return self._category

    @category.setter
    def category(self, category):
        self._category = category

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def photo_urls(self):
        return self._photo_urls

    @photo_urls.setter
    def photo_urls(self, photo_urls):
        self._photo_urls = photo_urls

    @property
    def tags(self):
        return self._tags

    @tags.setter
    def tags(self, tags):
        self._tags = tags

    @property
    def status(self):
        return self._status

    @status.setter
    def status(self, status):
        allowed_values = ["available", "pending", "sold"]
        if status not in allowed_values:
            raise ValueError(
                "Invalid value for `status`, must be one of {0}"
                .format(allowed_values)
            )
        self._status = status

    def __repr__(self):
        properties = []
        for p in self.__dict__:
            if p != 'swaggerTypes' and p != 'attributeMap':
                properties.append('{prop}={val!r}'
                                  .format(prop=p, val=self.__dict__[p]))

        return '<{name} {props}>'.format(name=__name__,
                                         props=' '.join(properties))
