import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.63578 4.22174L4.22157 5.63575L13.8284 15.2427L10 19.0711L19.0711 19.0711L19.0711 10L15.2426 13.8285L5.63578 4.22174Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightDownLongFill'

/**
 * Remix Icon: Arrow Right Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-long-fill Remix Icon Docs}
 */
export const ArrowRightDownLongFill = memo(Icon)
