import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасчетОстВремMixin
} from '../mixins/regenerated/models/i-i-s-itog12-расчет-ост-врем';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасчетОстВремMixin, Validations, {
});

defineProjections(Model);

export default Model;
