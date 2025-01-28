import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 3H21V21H3V15H7V11H11V7H15V3ZM17 5V9H13V13H9V17H5V19H19V5H17Z" />
    </Svg>
  )
}

Icon.displayName = 'StairsLine'

/**
 * Remix Icon: Stairs Line
 * @see {@link https://remixicon.com/icon/stairs-line Remix Icon Docs}
 */
export const StairsLine = memo(Icon)
