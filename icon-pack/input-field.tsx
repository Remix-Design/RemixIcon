import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 5H11V19H8V21H16V19H13V5H16V3H8V5ZM2 7C1.44772 7 1 7.44772 1 8V16C1 16.5523 1.44772 17 2 17H8V15H3V9H8V7H2ZM16 9H21V15H16V17H22C22.5523 17 23 16.5523 23 16V8C23 7.44772 22.5523 7 22 7H16V9Z" />
    </Svg>
  )
}

Icon.displayName = 'InputField'

/**
 * Remix Icon: Input Field
 * @see {@link https://remixicon.com/icon/input-field Remix Icon Docs}
 */
export const InputField = memo(Icon)
