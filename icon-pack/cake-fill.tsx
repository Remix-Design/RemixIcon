import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6.99993V10.9999L20 10.9999C20.5523 10.9999 21 11.4476 21 11.9999V19.9999L23 19.9999V21.9999H1V19.9999L3 19.9999V11.9999C3 11.4476 3.44772 10.9999 4 10.9999L11 10.9999V6.99993H13ZM13.8301 0.401855C14.6586 1.83673 14.1669 3.6715 12.7321 4.49993L11 5.49993C10.1716 4.06505 10.6632 2.23028 12.0981 1.40186L13.8301 0.401855Z" />
    </Svg>
  )
}

Icon.displayName = 'CakeFill'

/**
 * Remix Icon: Cake Fill
 * @see {@link https://remixicon.com/icon/cake-fill Remix Icon Docs}
 */
export const CakeFill = memo(Icon)
