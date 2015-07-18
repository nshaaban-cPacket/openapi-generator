#!/usr/bin/env python
# coding: utf-8

"""
UserApi.py
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

NOTE: This class is auto generated by the swagger code generator program.
      Do not edit the class manually.
"""
from __future__ import absolute_import

import sys
import os

# python 2 and python 3 compatibility library
from six import iteritems

from ..configuration import Configuration
from ..api_client import ApiClient


class UserApi(object):

    def __init__(self, api_client=None):
        config = Configuration()
        if api_client:
            self.api_client = api_client
        else:
            if not config.api_client:
                config.api_client = ApiClient('http://petstore.swagger.io/v2')
            self.api_client = config.api_client

    def create_user(self, **kwargs):
        """
        Create user
        This can only be done by the logged in user.

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.create_user(callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param User body: Created user object 
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_user" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user'.replace('{format}', 'json')
        method = 'POST'

        path_params = {}

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def create_users_with_array_input(self, **kwargs):
        """
        Creates list of users with given input array
        

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.create_users_with_array_input(callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param list[User] body: List of user object 
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_users_with_array_input" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/createWithArray'.replace('{format}', 'json')
        method = 'POST'

        path_params = {}

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def create_users_with_list_input(self, **kwargs):
        """
        Creates list of users with given input array
        

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.create_users_with_list_input(callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param list[User] body: List of user object 
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_users_with_list_input" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/createWithList'.replace('{format}', 'json')
        method = 'POST'

        path_params = {}

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def login_user(self, **kwargs):
        """
        Logs user into the system
        

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.login_user(callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str username: The user name for login 
        :param str password: The password for login in clear text 
        :return: str
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['username', 'password']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method login_user" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/login'.replace('{format}', 'json')
        method = 'GET'

        path_params = {}

        query_params = {}
        if 'username' in params:
            query_params['username'] = params['username']
        if 'password' in params:
            query_params['password'] = params['password']

        header_params = {}

        form_params = {}
        files = {}

        body_params = None

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type='str',
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def logout_user(self, **kwargs):
        """
        Logs out current logged in user session
        

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.logout_user(callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = []
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method logout_user" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/logout'.replace('{format}', 'json')
        method = 'GET'

        path_params = {}

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def get_user_by_name(self, username, **kwargs):
        """
        Get user by user name
        

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.get_user_by_name(username, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str username: The name that needs to be fetched. Use user1 for testing.  (required)
        :return: User
                 If the method is called asynchronously,
                 returns the request thread.
        """
        # verify the required parameter 'username' is set
        if username is None:
            raise ValueError("Missing the required parameter `username` when calling `get_user_by_name`")

        all_params = ['username']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_user_by_name" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/{username}'.replace('{format}', 'json')
        method = 'GET'

        path_params = {}
        if 'username' in params:
            path_params['username'] = params['username']

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type='User',
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def update_user(self, username, **kwargs):
        """
        Updated user
        This can only be done by the logged in user.

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.update_user(username, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str username: name that need to be deleted (required)
        :param User body: Updated user object 
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        # verify the required parameter 'username' is set
        if username is None:
            raise ValueError("Missing the required parameter `username` when calling `update_user`")

        all_params = ['username', 'body']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_user" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/{username}'.replace('{format}', 'json')
        method = 'PUT'

        path_params = {}
        if 'username' in params:
            path_params['username'] = params['username']

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response

    def delete_user(self, username, **kwargs):
        """
        Delete user
        This can only be done by the logged in user.

        SDK also supports asynchronous requests
        in which you can define a `callback` function
        to be passed along and invoked when receiving response:
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.delete_user(username, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param str username: The name that needs to be deleted (required)
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        # verify the required parameter 'username' is set
        if username is None:
            raise ValueError("Missing the required parameter `username` when calling `delete_user`")

        all_params = ['username']
        all_params.append('callback')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method delete_user" % key
                )
            params[key] = val
        del params['kwargs']

        resource_path = '/user/{username}'.replace('{format}', 'json')
        method = 'DELETE'

        path_params = {}
        if 'username' in params:
            path_params['username'] = params['username']

        query_params = {}

        header_params = {}

        form_params = {}
        files = {}

        body_params = None

        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json', 'application/xml'])
        if not header_params['Accept']:
            del header_params['Accept']

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type([])

        # Authentication setting
        auth_settings = []

        response = self.api_client.call_api(resource_path, method,
                                            path_params,
                                            query_params,
                                            header_params,
                                            body=body_params,
                                            post_params=form_params,
                                            files=files,
                                            response_type=None,
                                            auth_settings=auth_settings,
                                            callback=params.get('callback'))
        return response
