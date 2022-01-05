# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import petstore_api
from petstore_api.model.object_with_validations import ObjectWithValidations


class TestObjectWithValidations(unittest.TestCase):
    """ObjectWithValidations unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_ObjectWithValidations(self):
        """Test ObjectWithValidations"""

        with self.assertRaisesRegex(
            petstore_api.ApiValueError,
            r"Invalid value `frozendict.frozendict\({}\)`, number of properties must be greater than or equal to `2` at \('args\[0\]',\)"
        ):
            ObjectWithValidations({})


        with self.assertRaisesRegex(
            petstore_api.ApiValueError,
            r"Invalid value `frozendict.frozendict\({'a': 'a'}\)`, number of properties must be greater than or equal to `2` at \('args\[0\]',\)"
        ):
            # number of properties less than 2 fails
            model = ObjectWithValidations(a='a')

        # 2 or more properties succeeds
        model = ObjectWithValidations(a='a', b='b')
        model = ObjectWithValidations(a='a', b='b', c='c')


if __name__ == '__main__':
    unittest.main()
