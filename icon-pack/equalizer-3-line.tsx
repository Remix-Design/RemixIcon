import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 3V6H3V8H7V11H9V3H7ZM11 8H21V6H11V8ZM17 13V16H21V18H17V21H15V13H17ZM13 18H3V16H13V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Equalizer3Line'

/**
 * Remix Icon: Equalizer 3 Line
 * @see {@link https://remixicon.com/icon/equalizer-3-line Remix Icon Docs}
 */
export const Equalizer3Line = memo(Icon)
