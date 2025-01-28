import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignRight'

/**
 * Remix Icon: Align Right
 * @see {@link https://remixicon.com/icon/align-right Remix Icon Docs}
 */
export const AlignRight = memo(Icon)
