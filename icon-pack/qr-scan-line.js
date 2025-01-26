import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 16V21H3V16H5V19H19V16H21ZM3 11H21V13H3V11ZM21 8H19V5H5V8H3V3H21V8Z" />
    </Svg>
  )
}

Icon.displayName = 'QrScanLine'

/**
 * Remix Icon: Qr Scan Line
 * @see {@link https://remixicon.com/icon/qr-scan-line Remix Icon Docs}
 */
export const QrScanLine = memo(Icon)
