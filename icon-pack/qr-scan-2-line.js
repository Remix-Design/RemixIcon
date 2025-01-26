import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 3H21V8H19V5H15V3ZM9 3V5H5V8H3V3H9ZM15 21V19H19V16H21V21H15ZM9 21H3V16H5V19H9V21ZM3 11H21V13H3V11Z" />
    </Svg>
  )
}

Icon.displayName = 'QrScan2Line'

/**
 * Remix Icon: Qr Scan 2 Line
 * @see {@link https://remixicon.com/icon/qr-scan-2-line Remix Icon Docs}
 */
export const QrScan2Line = memo(Icon)
