import ItemView from '../../common/item-view';
import template from './item-template.hbs';

export default ItemView.extend({
  tagName: 'a',
  template: template,
  className: 'colors__item list-group-item',

  attributes() {
    return {
      href: '#images/' + this.model.get('id')
    };
  },

  modelEvents: {
    'all': 'render'
  }
});
