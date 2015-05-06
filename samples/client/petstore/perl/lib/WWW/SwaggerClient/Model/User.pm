package WWW::SwaggerClient::Model::User;

require 5.6.0;
use strict;
use warnings;
use utf8;
use JSON qw(decode_json);
use Data::Dumper;
use Module::Runtime qw(use_module);
use Log::Any qw($log);


#
#
#
#NOTE: This class is auto generated by the swagger code generator program. Do not edit the class manually.
#

my $swagger_types = {
      'id' => 'int',
      'username' => 'string',
      'first_name' => 'string',
      'last_name' => 'string',
      'email' => 'string',
      'password' => 'string',
      'phone' => 'string',
      'user_status' => 'int'
};

my $attribute_map = {
      'id' => 'id',
      'username' => 'username',
      'first_name' => 'firstName',
      'last_name' => 'lastName',
      'email' => 'email',
      'password' => 'password',
      'phone' => 'phone',
      'user_status' => 'userStatus'
};

# new object
sub new { 
    my ($class, $args) = @_; 
    my $self = { 
        #
        'id' => $args->{'id'}, 
        #
        'username' => $args->{'username'}, 
        #
        'first_name' => $args->{'firstName'}, 
        #
        'last_name' => $args->{'lastName'}, 
        #
        'email' => $args->{'email'}, 
        #
        'password' => $args->{'password'}, 
        #
        'phone' => $args->{'phone'}, 
        #User Status
        'user_status' => $args->{'userStatus'}
    }; 

    return bless $self, $class; 
}  

# return json string
sub to_hash {
  return decode_json(JSON->new->convert_blessed->encode( shift ));
}

# used by JSON for serialization
sub TO_JSON { 
  my $self = shift;
  my $_data = {};
  foreach my $_key (keys $attribute_map) {
    if (defined $self->{$attribute_map->{$_key}}) {
      $_data->{$attribute_map->{$_key}} = $self->{$_key};
    }
  }
  return $_data;
}

# from json string
sub from_hash {
  my ($self, $hash) = @_;
  # loop through attributes and use swagger_types to deserialize the data
  while ( my ($_key, $_type) = each $swagger_types) {
    if ($_type =~ /^array\[/i) { # array
      my $_subclass = substr($_type, 6, -1);
      my @_array = ();
      foreach my $_element (@{$hash->{$attribute_map->{$_key}}}) {
        push @_array, $self->_deserialize($_subclass, $_element);
      }
      $self->{$_key} = \@_array;
    } elsif (defined $hash->{$_key}) { #hash(model), primitive, datetime
      $self->{$_key} = $self->_deserialize($_type, $hash->{$_key});
    } else {
      $log->debugf("warning: %s not defined\n", $_key);
    }
  }

  return $self;
}
  
# deserialize non-array data
sub _deserialize {
  my ($self, $type, $data) = @_;
  $log->debugf("deserializing %s with %s",Dumper($data), $type);
      
  if ($type eq 'DateTime') {
    return DateTime->from_epoch(epoch => str2time($data));
  } elsif ( grep( /^$type$/, ('string', 'int', 'float', 'bool')) ) {
    return $data;
  } else { # hash(model)
    my $_instance = eval "WWW::SwaggerClient::Model::$type->new()";
    return $_instance->from_hash($data);
  }
}


1;
