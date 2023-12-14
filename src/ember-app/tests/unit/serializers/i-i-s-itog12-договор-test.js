import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog12-договор', 'Unit | Serializer | i-i-s-itog12-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itog12-договор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itog12-статус',
    'transform:i-i-s-itog12-тип-договора',
    'transform:i-i-s-itog12-услуга',

    'model:i-i-s-itog12-дир-отд-по-раб-с-кл',
    'model:i-i-s-itog12-длительность',
    'model:i-i-s-itog12-договор',
    'model:i-i-s-itog12-затр-время',
    'model:i-i-s-itog12-клиент',
    'model:i-i-s-itog12-оказ-услуг',
    'model:i-i-s-itog12-расчет-ост-врем',
    'model:i-i-s-itog12-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
