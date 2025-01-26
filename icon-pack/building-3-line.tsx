import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z" />
    </Svg>
  )
}

Icon.displayName = 'Building3Line'

/**
 * Remix Icon: Building 3 Line
 * @see {@link https://remixicon.com/icon/building-3-line Remix Icon Docs}
 */
export const Building3Line = memo(Icon)
