import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22V20H5V4H15V8H19V13H20.9998V7L16 2H3.9985C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H12ZM21.5356 21.1212L19.4143 18.9999L21.5356 16.8786L20.1214 15.4644L18.0001 17.5857L15.8788 15.4644L14.4646 16.8786L16.5859 18.9999L14.4646 21.1212L15.8788 22.5354L18.0001 20.4141L20.1214 22.5354L21.5356 21.1212Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCloseLine'

/**
 * Remix Icon: File Close Line
 * @see {@link https://remixicon.com/icon/file-close-line Remix Icon Docs}
 */
export const FileCloseLine = memo(Icon)
