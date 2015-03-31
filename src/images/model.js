import Model from '../common/model';

export default Model.extend({
  urlRoot: '/api/images',

  defaults: {
    active: false
  },

  validate(attrs) {
    var errors = [];

    if (attrs.name === '') {
      errors.push('Missing "name" field');
    }

    if (attrs.link === '') {
      errors.push('Missing "link" field');
    }

    return errors.length > 0 ? errors : undefined;
  }
});
