import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Number1'

/**
 * Remix Icon: Number 1
 * @see {@link https://remixicon.com/icon/number-1 Remix Icon Docs}
 */
export const Number1 = memo(Icon)
