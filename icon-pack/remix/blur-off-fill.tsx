import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.43239 6.8433L1.39355 2.80445L2.80777 1.39024L22.6068 21.1892L21.1925 22.6034L18.1537 19.5646C14.6255 22.8742 9.08161 22.8062 5.6362 19.3608C2.19078 15.9154 2.12284 10.3715 5.43239 6.8433ZM8.2433 4.02578L12.0002 0.268921L18.3641 6.63288C20.9499 9.21864 21.6333 12.9863 20.4144 16.1969L8.2433 4.02578Z" />
    </Svg>
  )
}

Icon.displayName = 'BlurOffFill'

/**
 * Remix Icon: Blur Off Fill
 * @see {@link https://remixicon.com/icon/blur-off-fill Remix Icon Docs}
 */
export const BlurOffFill = memo(Icon)
