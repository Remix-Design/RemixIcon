import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.44975 7.05017L2.5 11.9999L7.44727 16.9472L7.44826 12.9999H16.5501L16.55 16.9491L21.5 11.9994L16.5503 7.04968L16.5502 10.9999H7.44876L7.44975 7.05017Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandHorizontalSFill'

/**
 * Remix Icon: Expand Horizontal S Fill
 * @see {@link https://remixicon.com/icon/expand-horizontal-s-fill Remix Icon Docs}
 */
export const ExpandHorizontalSFill = memo(Icon)
