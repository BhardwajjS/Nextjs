import styled, { css } from 'styled-components';

/* eslint-disable indent */
const GroupStyle = styled.div`
  ${({ theme, fieldSize, status, shape, fullWidth }) => {
    const position = theme['formControlPadding' + fieldSize].split(' ');
    return css`
      display: flex;
      min-width: 0%;
      position: relative;
      margin-bottom: ${theme.margin};
      
      .label {
        background: ${theme.formControlBg};
        color: ${theme.formControlPlaceholderColor};
        ${theme.dir === 'rtl' ? 'right: 0;' : 'left: 0;'}
        top: 0;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
          opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
        transform-origin: top ${theme.dir === 'rtl' ? 'right' : 'left'};
        pointer-events: none;
        position: absolute;
        line-height: 1.15;
        padding: 0 5px;
        font-size: ${theme['formControlFontSize' + fieldSize]};
        transform: translate(
          ${theme.dir === 'rtl' && '-'}${position[1]}, 
          calc(${position[0]} + ${theme.formControlBorderWidth})
        );
      }

      input,
      textarea{
        &:not([disabled]):focus ~ .label,
        &[value]:not([value=""]) ~ .label {
          transform: scale(.75) translate(
            ${theme.dir === 'rtl' && '-'}${position[1]}, 
            -50%
          );

          color: ${
            status
              ? theme['formControl' + status + 'BorderColor']
              : theme.formControlSelectedBorderColor
          };

        }
      }

      input,
      select,
      textarea{
        background-color: ${theme.formControlBg};
        border-width: ${theme.formControlBorderWidth};
        border-color: ${theme.formControlBorderColor};
        border-style: ${theme.formControlBorderType};
        color: ${theme.formControlTextPrimaryColor};
        ${fullWidth && 'width: 100%;'}
        
        &:focus {
          outline: none;
          background-color: ${theme.formControlFocusBg};
          ${!status &&
            'border-color: ' + theme.formControlSelectedBorderColor + ';'}
        }

      
        &[disabled] ~ .label {
          opacity: 0.5;
        }
      
        ${status &&
          css`
            border-color: ${theme['formControl' + status + 'BorderColor']};
          `}
        ${shape &&
          css`
            border-radius: ${theme['formControl' + shape + 'BorderRadius']};
          `}
        ${fieldSize &&
          css`
            font-size: ${theme['formControlFontSize' + fieldSize]};
            padding: ${theme['formControlPadding' + fieldSize]};
          `}
      }
    `;
  }}
`;

function InputGroup(props) {
  return (
    <GroupStyle {...props}>
      {props.children}
      <div className="label">{props.label}</div>
    </GroupStyle>
  );
}

InputGroup.defaultProps = {
  fieldSize: 'Md'
};
export default InputGroup;
