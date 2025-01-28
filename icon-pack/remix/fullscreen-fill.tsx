import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 3H22V9H20V5H16V3ZM2 3H8V5H4V9H2V3ZM20 19V15H22V21H16V19H20ZM4 19H8V21H2V15H4V19Z" />
    </Svg>
  )
}

Icon.displayName = 'FullscreenFill'

/**
 * Remix Icon: Fullscreen Fill
 * @see {@link https://remixicon.com/icon/fullscreen-fill Remix Icon Docs}
 */
export const FullscreenFill = memo(Icon)
