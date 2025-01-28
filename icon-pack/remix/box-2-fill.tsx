import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65788V16.3469L12 20.689V12L4.5 7.65788Z" />
    </Svg>
  )
}

Icon.displayName = 'Box2Fill'

/**
 * Remix Icon: Box 2 Fill
 * @see {@link https://remixicon.com/icon/box-2-fill Remix Icon Docs}
 */
export const Box2Fill = memo(Icon)
