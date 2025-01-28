import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4H4V20H2V4ZM6 4H8V20H6V4ZM9 4H12V20H9V4ZM13 4H15V20H13V4ZM16 4H18V20H16V4ZM19 4H22V20H19V4Z" />
    </Svg>
  )
}

Icon.displayName = 'BarcodeFill'

/**
 * Remix Icon: Barcode Fill
 * @see {@link https://remixicon.com/icon/barcode-fill Remix Icon Docs}
 */
export const BarcodeFill = memo(Icon)
