import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗатрВремяMixin
} from '../mixins/regenerated/models/i-i-s-itog12-затр-время';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗатрВремяMixin, Validations, {
});

defineProjections(Model);

export default Model;
