import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM15.5355 7.05025L10.5858 12L12 13.4142L16.9497 8.46447L15.5355 7.05025Z" />
    </Svg>
  )
}

Icon.displayName = 'Timer2Fill'

/**
 * Remix Icon: Timer 2 Fill
 * @see {@link https://remixicon.com/icon/timer-2-fill Remix Icon Docs}
 */
export const Timer2Fill = memo(Icon)
