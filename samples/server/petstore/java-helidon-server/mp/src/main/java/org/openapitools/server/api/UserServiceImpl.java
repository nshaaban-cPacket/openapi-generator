/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.openapitools.server.api;

import java.util.List;
import java.time.OffsetDateTime;
import org.openapitools.server.model.User;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;


import java.io.InputStream;
import java.util.Map;
import java.util.List;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;

@Path("/user")
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaHelidonServerCodegen")
public class UserServiceImpl implements UserService {

    @POST
    @Consumes({ "application/json" })
    public Response createUser(@Valid @NotNull User user) {
        return Response.ok().entity("magic!").build();
    }

    @POST
    @Path("/createWithArray")
    @Consumes({ "application/json" })
    public Response createUsersWithArrayInput(@Valid @NotNull List<User> user) {
        return Response.ok().entity("magic!").build();
    }

    @POST
    @Path("/createWithList")
    @Consumes({ "application/json" })
    public Response createUsersWithListInput(@Valid @NotNull List<User> user) {
        return Response.ok().entity("magic!").build();
    }

    @DELETE
    @Path("/{username}")
    public Response deleteUser(@PathParam("username") String username) {
        return Response.ok().entity("magic!").build();
    }

    @GET
    @Path("/{username}")
    @Produces({ "application/xml", "application/json" })
    public Response getUserByName(@PathParam("username") String username) {
        return Response.ok().entity("magic!").build();
    }

    @GET
    @Path("/login")
    @Produces({ "application/xml", "application/json" })
    public Response loginUser(@QueryParam("username") @NotNull String username,@QueryParam("password") @NotNull String password) {
        return Response.ok().entity("magic!").build();
    }

    @GET
    @Path("/logout")
    public Response logoutUser() {
        return Response.ok().entity("magic!").build();
    }

    @PUT
    @Path("/{username}")
    @Consumes({ "application/json" })
    public Response updateUser(@PathParam("username") String username,@Valid @NotNull User user) {
        return Response.ok().entity("magic!").build();
    }
}
