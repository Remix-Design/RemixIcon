import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 10V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V10H22ZM21 3C21.5523 3 22 3.44772 22 4V8H2V4C2 3.44772 2.44772 3 3 3H21Z" />
    </Svg>
  )
}

Icon.displayName = 'LayoutTopFill'

/**
 * Remix Icon: Layout Top Fill
 * @see {@link https://remixicon.com/icon/layout-top-fill Remix Icon Docs}
 */
export const LayoutTopFill = memo(Icon)
