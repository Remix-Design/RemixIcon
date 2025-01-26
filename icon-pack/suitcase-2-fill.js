import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 23H16V22H8V23H6V22H5C3.89543 22 3 21.1046 3 20V7C3 5.89543 3.89543 5 5 5H8V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5H19C20.1046 5 21 5.89543 21 7V20C21 21.1046 20.1046 22 19 22H18V23ZM10 9H8V18H10V9ZM16 9H14V18H16V9ZM14 4H10V5H14V4Z" />
    </Svg>
  )
}

Icon.displayName = 'Suitcase2Fill'

/**
 * Remix Icon: Suitcase 2 Fill
 * @see {@link https://remixicon.com/icon/suitcase-2-fill Remix Icon Docs}
 */
export const Suitcase2Fill = memo(Icon)
