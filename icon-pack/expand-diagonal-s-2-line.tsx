import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 8.41421V12L5 12L5 5L12 5V7L8.41421 7L17 15.5858V12L19 12L19 19H12V17H15.5858L7 8.41421Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandDiagonalS2Line'

/**
 * Remix Icon: Expand Diagonal S 2 Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-2-line Remix Icon Docs}
 */
export const ExpandDiagonalS2Line = memo(Icon)
