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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.client.model.QuadrilateralInterface;
import org.openapitools.client.model.ShapeInterface;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.openapitools.client.JSON;


/**
 * ComplexQuadrilateral
 */
@JsonPropertyOrder({
  ComplexQuadrilateral.JSON_PROPERTY_SHAPE_TYPE,
  ComplexQuadrilateral.JSON_PROPERTY_QUADRILATERAL_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ComplexQuadrilateral {
  public static final String JSON_PROPERTY_SHAPE_TYPE = "shapeType";
  private String shapeType;

  public static final String JSON_PROPERTY_QUADRILATERAL_TYPE = "quadrilateralType";
  private String quadrilateralType;


  public ComplexQuadrilateral shapeType(String shapeType) {
    this.shapeType = shapeType;
    return this;
  }

   /**
   * Get shapeType
   * @return shapeType
  **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_SHAPE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getShapeType() {
    return shapeType;
  }


  public void setShapeType(String shapeType) {
    this.shapeType = shapeType;
  }


  public ComplexQuadrilateral quadrilateralType(String quadrilateralType) {
    this.quadrilateralType = quadrilateralType;
    return this;
  }

   /**
   * Get quadrilateralType
   * @return quadrilateralType
  **/
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_QUADRILATERAL_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getQuadrilateralType() {
    return quadrilateralType;
  }


  public void setQuadrilateralType(String quadrilateralType) {
    this.quadrilateralType = quadrilateralType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ComplexQuadrilateral complexQuadrilateral = (ComplexQuadrilateral) o;
    return Objects.equals(this.shapeType, complexQuadrilateral.shapeType) &&
        Objects.equals(this.quadrilateralType, complexQuadrilateral.quadrilateralType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(shapeType, quadrilateralType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ComplexQuadrilateral {\n");
    sb.append("    shapeType: ").append(toIndentedString(shapeType)).append("\n");
    sb.append("    quadrilateralType: ").append(toIndentedString(quadrilateralType)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

