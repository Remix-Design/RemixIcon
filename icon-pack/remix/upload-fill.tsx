import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z" />
    </Svg>
  )
}

Icon.displayName = 'UploadFill'

/**
 * Remix Icon: Upload Fill
 * @see {@link https://remixicon.com/icon/upload-fill Remix Icon Docs}
 */
export const UploadFill = memo(Icon)
