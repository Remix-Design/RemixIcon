import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 5L5 12.5L8.04289 9.45711L14.5429 15.9571L11.5 19H19L19 11.5L15.9571 14.5429L9.45711 8.04289L12.5 5L5 5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandDiagonalS2Fill'

/**
 * Remix Icon: Expand Diagonal S 2 Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-2-fill Remix Icon Docs}
 */
export const ExpandDiagonalS2Fill = memo(Icon)
