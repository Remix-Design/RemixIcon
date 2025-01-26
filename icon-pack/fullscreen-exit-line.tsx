import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z" />
    </Svg>
  )
}

Icon.displayName = 'FullscreenExitLine'

/**
 * Remix Icon: Fullscreen Exit Line
 * @see {@link https://remixicon.com/icon/fullscreen-exit-line Remix Icon Docs}
 */
export const FullscreenExitLine = memo(Icon)
