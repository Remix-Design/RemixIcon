import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z" />
    </Svg>
  )
}

Icon.displayName = 'Number7'

/**
 * Remix Icon: Number 7
 * @see {@link https://remixicon.com/icon/number-7 Remix Icon Docs}
 */
export const Number7 = memo(Icon)
