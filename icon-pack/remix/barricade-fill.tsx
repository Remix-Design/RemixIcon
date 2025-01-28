import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5556 19H21V21H3V19H4.44444L5.33333 15H18.6667L19.5556 19ZM17.3333 9L18.2222 13H5.77778L6.66667 9H17.3333ZM16.8889 7H7.11111L7.82598 3.78307C7.92766 3.32553 8.33347 3 8.80217 3H15.1978C15.6665 3 16.0723 3.32553 16.174 3.78307L16.8889 7Z" />
    </Svg>
  )
}

Icon.displayName = 'BarricadeFill'

/**
 * Remix Icon: Barricade Fill
 * @see {@link https://remixicon.com/icon/barricade-fill Remix Icon Docs}
 */
export const BarricadeFill = memo(Icon)
