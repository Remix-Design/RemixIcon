import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 2V22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H8ZM20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H10V2H20.0049Z" />
    </Svg>
  )
}

Icon.displayName = 'BookletFill'

/**
 * Remix Icon: Booklet Fill
 * @see {@link https://remixicon.com/icon/booklet-fill Remix Icon Docs}
 */
export const BookletFill = memo(Icon)
