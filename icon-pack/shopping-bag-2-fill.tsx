import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V3C3.00488 2.44772 3.4526 2 4.00488 2H20.0049C20.5572 2 21.0049 2.44772 21.0049 3V21C21.0049 21.5523 20.5572 22 20.0049 22ZM9.00488 6H7.00488V8C7.00488 10.7614 9.24346 13 12.0049 13C14.7663 13 17.0049 10.7614 17.0049 8V6H15.0049V8C15.0049 9.65685 13.6617 11 12.0049 11C10.348 11 9.00488 9.65685 9.00488 8V6Z" />
    </Svg>
  )
}

Icon.displayName = 'ShoppingBag2Fill'

/**
 * Remix Icon: Shopping Bag 2 Fill
 * @see {@link https://remixicon.com/icon/shopping-bag-2-fill Remix Icon Docs}
 */
export const ShoppingBag2Fill = memo(Icon)
