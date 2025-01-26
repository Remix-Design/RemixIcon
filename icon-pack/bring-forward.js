import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 3C14.5523 3 15 3.44772 15 4V9H20C20.5523 9 21 9.44772 21 10V20C21 20.5523 20.5523 21 20 21H10C9.44772 21 9 20.5523 9 20V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H14ZM13 5H5V13H13V5Z" />
    </Svg>
  )
}

Icon.displayName = 'BringForward'

/**
 * Remix Icon: Bring Forward
 * @see {@link https://remixicon.com/icon/bring-forward Remix Icon Docs}
 */
export const BringForward = memo(Icon)
