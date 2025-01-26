import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 13H21V21.0025C21 21.5534 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5537 3 21.0025V13ZM3 2.99754C3 2.44662 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.44631 21 2.99754V11H3V2.99754ZM9 5V7H15V5H9ZM9 16V18H15V16H9Z" />
    </Svg>
  )
}

Icon.displayName = 'ArchiveDrawerFill'

/**
 * Remix Icon: Archive Drawer Fill
 * @see {@link https://remixicon.com/icon/archive-drawer-fill Remix Icon Docs}
 */
export const ArchiveDrawerFill = memo(Icon)
