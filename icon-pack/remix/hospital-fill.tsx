import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8H9V10H11V12H13V10H15V8H13V6H11V8ZM14 20H16V14H8V20H10V16H14V20Z" />
    </Svg>
  )
}

Icon.displayName = 'HospitalFill'

/**
 * Remix Icon: Hospital Fill
 * @see {@link https://remixicon.com/icon/hospital-fill Remix Icon Docs}
 */
export const HospitalFill = memo(Icon)
