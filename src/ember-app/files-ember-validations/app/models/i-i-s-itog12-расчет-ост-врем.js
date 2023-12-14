import {
  defineNamespace,
  defineProjections,
  Model as РасчетОстВремMixin
} from '../mixins/regenerated/models/i-i-s-itog12-расчет-ост-врем';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетОстВремMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
