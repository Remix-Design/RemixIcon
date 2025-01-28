import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignCenter'

/**
 * Remix Icon: Align Center
 * @see {@link https://remixicon.com/icon/align-center Remix Icon Docs}
 */
export const AlignCenter = memo(Icon)
