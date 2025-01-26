import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 11.0001L11 2.0005L13 2.00049L13 11.0001L22.0001 10.9999L22.0002 12.9999L13 13.0001L13.0001 22L11.0001 22L11.0001 13.0001L2.00004 13.0003L2 11.0003L11 11.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'AddLargeFill'

/**
 * Remix Icon: Add Large Fill
 * @see {@link https://remixicon.com/icon/add-large-fill Remix Icon Docs}
 */
export const AddLargeFill = memo(Icon)
