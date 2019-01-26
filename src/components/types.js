/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';

const badge = PropTypes.shape({
  status: colorState,
  title: PropTypes.string,
  position
});
const position = PropTypes.oneOf([
  'topRight',
  'topLeft',
  'bottomRight',
  'bottomLeft',
  'topStart',
  'topEnd',
  'bottomStart',
  'bottomEnd'
]);

const colorState = PropTypes.oneOf([
  'Info',
  'Success',
  'Danger',
  'Primary',
  'Warning',
  'Disabled'
]);

const statusArray = ['Info', 'Success', 'Danger', 'Primary', 'Warning'];

const size = PropTypes.oneOf(['XXS', 'XS', 'SM', 'MD', 'LG', 'XL', 'XXL']);

const shape = PropTypes.oneOf(['Rectangle', 'SemiRound', 'Round']);

export { badge, colorState, size, statusArray, shape, position };
