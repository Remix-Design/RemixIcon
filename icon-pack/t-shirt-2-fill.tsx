import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.998 3C21.5503 3 21.998 3.44772 21.998 4V11C21.998 11.5523 21.5503 12 20.998 12H18.997L18.998 20C18.998 20.5523 18.5503 21 17.998 21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20L4.99705 11.999L2.99805 12C2.44576 12 1.99805 11.5523 1.99805 11V4C1.99805 3.44772 2.44576 3 2.99805 3H8.99805C8.99805 4.65685 10.3412 6 11.998 6C13.6549 6 14.998 4.65685 14.998 3H20.998Z" />
    </Svg>
  )
}

Icon.displayName = 'TShirt2Fill'

/**
 * Remix Icon: T Shirt 2 Fill
 * @see {@link https://remixicon.com/icon/t-shirt-2-fill Remix Icon Docs}
 */
export const TShirt2Fill = memo(Icon)
