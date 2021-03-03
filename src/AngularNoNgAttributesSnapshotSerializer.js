'use strict';

const { rootLogger } = require('ts-jest/dist/utils/logger');

rootLogger.warn("The snapshot serializer under import path `'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js'` is deprecated and will be removed in v9.0.0. Please switch to `'jest-preset-angular/build/serializers/no-ng-attributes'`")

const jestDOMElementSerializer = require('pretty-format').plugins.DOMElement;

const attributesToRemovePatterns = ['ng-reflect', '_nghost', '_ngcontent', 'ng-version'];
const attributesToClean = {
  class: [/^(?:mat|cdk|ng).*-\w*\d+-\d+$/, /^ng-star-inserted$/], // e.g. "ng-tns-c25-1" or "ng-star-inserted", literally
  id: [/^(?:mat|cdk|ng).*-\d+$/], // e.g. "mat-input-4", "cdk-step-content-0-0"
  for: [/^(?:mat|cdk|ng).*-\d+$/], // e.g. "mat-form-field-label-9"
  'aria-owns': [/^(?:mat|cdk|ng).*-\d+$/], // e.g. "mat-input-4"
  'aria-labelledby': [/^(?:mat|cdk|ng).*-\d+$/], // e.g. "mat-input-4", "cdk-step-label-0-0"
  'aria-controls': [/^(?:mat|cdk|ng).*-\d+$/], // e.g. "cdk-step-content-2-0"
};

const hasAttributesToRemove = (attribute) =>
  attributesToRemovePatterns.some((removePattern) => attribute.name.startsWith(removePattern));
const hasAttributesToClean = (attribute) =>
  Object.keys(attributesToClean).some((removePatternKey) => attribute.name === removePatternKey);

const serialize = (node, ...rest) => {
  const nodeCopy = node.cloneNode(true);
  // Remove angular-specific attributes
  Object.values(nodeCopy.attributes)
    .filter(hasAttributesToRemove)
    .forEach((attribute) => nodeCopy.attributes.removeNamedItem(attribute.name));
  // Remove angular auto-added classes
  Object.values(nodeCopy.attributes)
    .filter(hasAttributesToClean)
    .forEach((attribute) => {
      attribute.value = attribute.value
        .split(' ')
        .filter(
          (attrValue) =>
            !attributesToClean[attribute.name].some((attributeCleanRegex) => attributeCleanRegex.test(attrValue))
        )
        .join(' ');
      if (attribute.value === '') {
        nodeCopy.attributes.removeNamedItem(attribute.name);
      } else {
        nodeCopy.attributes.setNamedItem(attribute);
      }
    });

  return jestDOMElementSerializer.serialize(nodeCopy, ...rest);
};

const serializeTestFn = (val) =>
  val.attributes !== undefined &&
  Object.values(val.attributes).some(
    (attribute) => hasAttributesToRemove(attribute) || hasAttributesToClean(attribute)
  );
const test = (val) => jestDOMElementSerializer.test(val) && serializeTestFn(val);

module.exports = {
  serialize,
  test,
};
