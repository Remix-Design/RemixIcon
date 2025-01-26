import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.998 1C19.5503 1 19.998 1.44772 19.998 2V22C19.998 22.5523 19.5503 23 18.998 23H4.99805C4.44576 23 3.99805 22.5523 3.99805 22V2C3.99805 1.44772 4.44576 1 4.99805 1H18.998ZM17.998 12H5.99805V21H17.998V12ZM9.99805 14V18H7.99805V14H9.99805ZM17.998 3H5.99805V10H17.998V3ZM9.99805 5V8H7.99805V5H9.99805Z" />
    </Svg>
  )
}

Icon.displayName = 'FridgeLine'

/**
 * Remix Icon: Fridge Line
 * @see {@link https://remixicon.com/icon/fridge-line Remix Icon Docs}
 */
export const FridgeLine = memo(Icon)
