import Collection from '../common/collection';
import Model from './model';

export default Collection.extend({
  //url: '/api/books',
  url: 'http://localhost:3000/collections/manifests',
  model: Model
});
