import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.00488 8.99979H21.0049C21.5572 8.99979 22.0049 9.4475 22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V8.99979ZM3.00488 2.99979H18.0049V6.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM15.0049 13.9998V15.9998H18.0049V13.9998H15.0049Z" />
    </Svg>
  )
}

Icon.displayName = 'WalletFill'

/**
 * Remix Icon: Wallet Fill
 * @see {@link https://remixicon.com/icon/wallet-fill Remix Icon Docs}
 */
export const WalletFill = memo(Icon)
