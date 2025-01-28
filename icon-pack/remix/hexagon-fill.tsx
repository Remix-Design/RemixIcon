import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'HexagonFill'

/**
 * Remix Icon: Hexagon Fill
 * @see {@link https://remixicon.com/icon/hexagon-fill Remix Icon Docs}
 */
export const HexagonFill = memo(Icon)
