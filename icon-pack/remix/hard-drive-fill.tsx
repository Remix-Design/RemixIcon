import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.9506 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V12.9506C3.32891 12.9833 3.6625 13 4 13C9.52285 13 14 8.52285 14 3C14 2.6625 13.9833 2.32891 13.9506 2ZM15 16V18H17V16H15ZM11.9381 2C11.979 2.32759 12 2.66134 12 3C12 7.41828 8.41828 11 4 11C3.66134 11 3.32759 10.979 3 10.9381V3C3 2.44772 3.44772 2 4 2H11.9381Z" />
    </Svg>
  )
}

Icon.displayName = 'HardDriveFill'

/**
 * Remix Icon: Hard Drive Fill
 * @see {@link https://remixicon.com/icon/hard-drive-fill Remix Icon Docs}
 */
export const HardDriveFill = memo(Icon)
