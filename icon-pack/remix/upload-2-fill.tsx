import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Upload2Fill'

/**
 * Remix Icon: Upload 2 Fill
 * @see {@link https://remixicon.com/icon/upload-2-fill Remix Icon Docs}
 */
export const Upload2Fill = memo(Icon)
