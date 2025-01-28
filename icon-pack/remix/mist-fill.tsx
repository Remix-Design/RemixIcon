import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H12V11H2V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H22V16H12V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z" />
    </Svg>
  )
}

Icon.displayName = 'MistFill'

/**
 * Remix Icon: Mist Fill
 * @see {@link https://remixicon.com/icon/mist-fill Remix Icon Docs}
 */
export const MistFill = memo(Icon)
