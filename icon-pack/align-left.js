import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignLeft'

/**
 * Remix Icon: Align Left
 * @see {@link https://remixicon.com/icon/align-left Remix Icon Docs}
 */
export const AlignLeft = memo(Icon)
