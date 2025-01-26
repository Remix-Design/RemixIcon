import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.0004 18.1716L14.4649 15.636L13.0507 17.0503L18.0004 22L22.9502 17.0503L21.536 15.636L19.0004 18.1716V11C19.0004 6.58172 15.4187 3 11.0004 3C6.58215 3 3.00043 6.58172 3.00043 11V20H5.00043V11C5.00043 7.68629 7.68672 5 11.0004 5C14.3141 5 17.0004 7.68629 17.0004 11V18.1716Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowTurnBackLine'

/**
 * Remix Icon: Arrow Turn Back Line
 * @see {@link https://remixicon.com/icon/arrow-turn-back-line Remix Icon Docs}
 */
export const ArrowTurnBackLine = memo(Icon)
