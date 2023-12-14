import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-itog12-расчет-ост-врем-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-itog12-оказ-услуг+договор':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номер',
            required: true,
            relationName: 'договор',
            projection: 'ДоговорL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-itog12-оказ-услуг+услуги':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'услуги',
            required: true,
            relationName: 'услуги',
            projection: 'УслугиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
