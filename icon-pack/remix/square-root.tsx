import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.382 4H22V6H16.618L9 21.2361L5.38197 14H2V12H6.61803L9 16.7639L15.382 4Z" />
    </Svg>
  )
}

Icon.displayName = 'SquareRoot'

/**
 * Remix Icon: Square Root
 * @see {@link https://remixicon.com/icon/square-root Remix Icon Docs}
 */
export const SquareRoot = memo(Icon)
