import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashlightLine'

/**
 * Remix Icon: Flashlight Line
 * @see {@link https://remixicon.com/icon/flashlight-line Remix Icon Docs}
 */
export const FlashlightLine = memo(Icon)
