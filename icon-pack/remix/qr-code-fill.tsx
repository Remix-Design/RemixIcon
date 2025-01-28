import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 17V16H13V13H16V15H18V17H17V19H15V21H13V18H15V17H16ZM21 21H17V19H19V17H21V21ZM3 3H11V11H3V3ZM13 3H21V11H13V3ZM3 13H11V21H3V13ZM18 13H21V15H18V13ZM6 6V8H8V6H6ZM6 16V18H8V16H6ZM16 6V8H18V6H16Z" />
    </Svg>
  )
}

Icon.displayName = 'QrCodeFill'

/**
 * Remix Icon: Qr Code Fill
 * @see {@link https://remixicon.com/icon/qr-code-fill Remix Icon Docs}
 */
export const QrCodeFill = memo(Icon)
