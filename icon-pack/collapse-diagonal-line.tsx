import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 4.00008H13V11.0001H20V9.00008H16.4142L20.7071 4.70718L19.2929 3.29297L15 7.58586V4.00008ZM4.00008 15H7.58586L3.29297 19.2929L4.70718 20.7071L9.00008 16.4142V20H11.0001V13H4.00008V15Z" />
    </Svg>
  )
}

Icon.displayName = 'CollapseDiagonalLine'

/**
 * Remix Icon: Collapse Diagonal Line
 * @see {@link https://remixicon.com/icon/collapse-diagonal-line Remix Icon Docs}
 */
export const CollapseDiagonalLine = memo(Icon)
