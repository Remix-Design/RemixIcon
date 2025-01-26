import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 3V5H4V19H20V10H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9ZM16 5V1L23 7H14C12.8954 7 12 7.89543 12 9V15H10V9C10 6.79086 11.7909 5 14 5H16Z" />
    </Svg>
  )
}

Icon.displayName = 'ShareForwardBoxFill'

/**
 * Remix Icon: Share Forward Box Fill
 * @see {@link https://remixicon.com/icon/share-forward-box-fill Remix Icon Docs}
 */
export const ShareForwardBoxFill = memo(Icon)
