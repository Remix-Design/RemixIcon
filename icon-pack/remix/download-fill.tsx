import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z" />
    </Svg>
  )
}

Icon.displayName = 'DownloadFill'

/**
 * Remix Icon: Download Fill
 * @see {@link https://remixicon.com/icon/download-fill Remix Icon Docs}
 */
export const DownloadFill = memo(Icon)
