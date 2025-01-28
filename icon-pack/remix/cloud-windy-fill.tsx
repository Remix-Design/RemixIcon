import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 19V15.0069H2.07423C1.39109 13.8286 1 12.46 1 11C1 6.58172 4.58172 3 9 3C12.3949 3 15.2959 5.11466 16.4576 8.09864C16.7951 8.0339 17.1436 8 17.5 8C20.5376 8 23 10.4624 23 13.5C23 16.5376 20.5376 19 17.5 19H14ZM6 21H16V23H6V21ZM2 17H12V19H2V17Z" />
    </Svg>
  )
}

Icon.displayName = 'CloudWindyFill'

/**
 * Remix Icon: Cloud Windy Fill
 * @see {@link https://remixicon.com/icon/cloud-windy-fill Remix Icon Docs}
 */
export const CloudWindyFill = memo(Icon)
