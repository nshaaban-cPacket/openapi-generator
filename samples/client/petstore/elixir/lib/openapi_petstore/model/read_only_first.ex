# NOTE: This file is auto generated by OpenAPI Generator 6.5.0 (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule OpenapiPetstore.Model.ReadOnlyFirst do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :bar,
    :baz
  ]

  @type t :: %__MODULE__{
    :bar => String.t | nil,
    :baz => String.t | nil
  }
end

defimpl Poison.Decoder, for: OpenapiPetstore.Model.ReadOnlyFirst do
  def decode(value, _options) do
    value
  end
end

