import React from 'react';
import { styled, VariantProps } from '../theme/stitches.config';
import withDefaults from '../utils/with-defaults';
import clsx from '../utils/clsx';

interface Props {
  isRight?: boolean;
  isSingle?: boolean;
  className?: string;
}

const defaultProps = {
  className: ''
};

export const StyledButtonIcon = styled('span', {
  dflex: 'center',
  position: 'absolute',
  left: '$$buttonPadding',
  right: 'auto',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'inherit',
  zIndex: '$1',
  '& svg': {
    background: 'transparent'
  },
  variants: {
    isAuto: {
      true: {
        position: 'relative',
        transform: 'none',
        top: '0%'
      }
    },
    isRight: {
      true: {
        right: '$$buttonPadding',
        left: 'auto'
      }
    },
    isSingle: {
      true: {
        position: 'static',
        transform: 'none',
        m: 0
      }
    }
  },
  compoundVariants: [
    // isAuto && isRight
    {
      isAuto: true,
      isRight: true,
      css: {
        order: 2,
        ml: '$$buttonPadding',
        right: '0%',
        left: '0%'
      }
    },
    // isAuto && !isRight
    {
      isAuto: true,
      isRight: false,
      css: {
        order: 0,
        mr: '$$buttonPadding',
        right: '0%',
        left: '0%'
      }
    },
    // isAuto && isSingle
    {
      isAuto: true,
      isSingle: true,
      css: {
        m: 0
      }
    }
  ]
});

type ButtonIconVariants = VariantProps<typeof StyledButtonIcon>;

export type ButtonIconProps = Props & typeof defaultProps & ButtonIconVariants;

const ButtonIcon: React.FC<React.PropsWithChildren<ButtonIconProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <StyledButtonIcon
      className={clsx('nextui-button-icon', className)}
      {...props}
    >
      {children}
    </StyledButtonIcon>
  );
};

ButtonIcon.toString = () => '.nextui-button-icon';

const MemoButtonIcon = React.memo(ButtonIcon);

export default withDefaults(MemoButtonIcon, defaultProps);
