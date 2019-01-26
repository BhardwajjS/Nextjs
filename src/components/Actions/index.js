/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';

import { badge } from '../types';
import { ActionsStyle, ActionStyle } from './style';
import Badge from '../Badge';

function Actions({ actions, className, style }) {
  return (
    <ActionsStyle className={className} style={style}>
      {actions.items.map((action, index) => {
        const icon = (
          <a className="icon-container" {...action.events}>
            <i className={'control-icon ' + action.icon} />
          </a>
        );
        return (
          <ActionStyle
            key={index}
            fullWidth={actions.fullWidth}
            size={actions.size}
            inverse={actions.inverse}
            disabled={action.disabled}
          >
            {action.icon ? (
              action.link ? (
                <Link {...action.link}>{icon}</Link>
              ) : (
                icon
              )
            ) : (
              action.content
            )}
            {action.badge && (
              <Badge
                status={action.badge.status}
                position={action.badge.position}
              >
                {action.badge.title}
              </Badge>
            )}
          </ActionStyle>
        );
      })}
    </ActionsStyle>
  );
}

Actions.propTypes = {
  classNames: PropTypes.string,
  style: PropTypes.object,
  actions: PropTypes.shape({
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf(['SM', 'MD', 'LG']),
    inverse: PropTypes.bool,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        content: PropTypes.any,
        disabled: PropTypes.bool,
        badge
      })
    ).isRequired
  })
};

export default Actions;
