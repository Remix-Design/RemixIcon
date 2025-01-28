import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 3H21V9H15V3ZM9 3V9H3V3H9ZM15 21V15H21V21H15ZM9 21H3V15H9V21ZM3 11H21V13H3V11Z" />
    </Svg>
  )
}

Icon.displayName = 'QrScan2Fill'

/**
 * Remix Icon: Qr Scan 2 Fill
 * @see {@link https://remixicon.com/icon/qr-scan-2-fill Remix Icon Docs}
 */
export const QrScan2Fill = memo(Icon)
