import Collection from '../common/collection';
import Model from './model';

export default Collection.extend({
  url: '/api/images',
  model: Model
});
