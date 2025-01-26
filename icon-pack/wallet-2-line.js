import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.0049 6.99979V4.99979H4.00488V18.9998H20.0049V16.9998H12.0049C11.4526 16.9998 11.0049 16.5521 11.0049 15.9998V7.99979C11.0049 7.4475 11.4526 6.99979 12.0049 6.99979H20.0049ZM3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM13.0049 8.99979V14.9998H20.0049V8.99979H13.0049ZM15.0049 10.9998H18.0049V12.9998H15.0049V10.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'Wallet2Line'

/**
 * Remix Icon: Wallet 2 Line
 * @see {@link https://remixicon.com/icon/wallet-2-line Remix Icon Docs}
 */
export const Wallet2Line = memo(Icon)
