import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288L12 0.268921ZM12 3.09735L7.05025 8.0471C4.31658 10.7808 4.31658 15.2129 7.05025 17.9466C8.41814 19.3145 10.2113 19.9979 12.0042 19.9968L12 3.09735Z" />
    </Svg>
  )
}

Icon.displayName = 'ContrastDropFill'

/**
 * Remix Icon: Contrast Drop Fill
 * @see {@link https://remixicon.com/icon/contrast-drop-fill Remix Icon Docs}
 */
export const ContrastDropFill = memo(Icon)
