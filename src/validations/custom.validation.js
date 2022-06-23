const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 6) {
    return helpers.message('password must be at least 6 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

const mobile = (value, helpers) => {
  if (value.length > 11) {
    return helpers.message('Please provide a valid mobile number');
  }
  if (!value.match(/^(?:\\+88|88)?(01[3-9]\\d{8})$/)) {
    return helpers.message('Please provide a valid mobile number');
  }
};
module.exports = {
  objectId,
  password,
  mobile,
};
