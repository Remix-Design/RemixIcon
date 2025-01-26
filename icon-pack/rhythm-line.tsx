import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 9H4V21H2V9ZM8 3H10V21H8V3ZM14 12H16V21H14V12ZM20 6H22V21H20V6Z" />
    </Svg>
  )
}

Icon.displayName = 'RhythmLine'

/**
 * Remix Icon: Rhythm Line
 * @see {@link https://remixicon.com/icon/rhythm-line Remix Icon Docs}
 */
export const RhythmLine = memo(Icon)
