import Model from '../common/model';

export default Model.extend({
  // urlRoot: '/api/books',
  urlRoot: 'http://localhost:3000/collections/manifests',
  idAttribute: '_id',
  isActive() {
    return this.collection.active === this;
  }
});
