import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 5H20V3H4V5ZM20 9H4V7H20V9ZM3 11H10V13H14V11H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11ZM16 13V15H8V13H5V19H19V13H16Z" />
    </Svg>
  )
}

Icon.displayName = 'ArchiveStackLine'

/**
 * Remix Icon: Archive Stack Line
 * @see {@link https://remixicon.com/icon/archive-stack-line Remix Icon Docs}
 */
export const ArchiveStackLine = memo(Icon)
