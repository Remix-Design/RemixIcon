import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 13C19.0928 13 20.1174 13.2922 20.9999 13.8026L20.9998 7L16 2H3.9985C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H12.8027C12.2922 21.1175 12 20.0929 12 19C12 15.6863 14.6863 13 18 13ZM21.5356 21.1212L19.4143 18.9999L21.5356 16.8786L20.1214 15.4644L18.0001 17.5857L15.8788 15.4644L14.4646 16.8786L16.5859 18.9999L14.4646 21.1212L15.8788 22.5354L18.0001 20.4141L20.1214 22.5354L21.5356 21.1212Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCloseFill'

/**
 * Remix Icon: File Close Fill
 * @see {@link https://remixicon.com/icon/file-close-fill Remix Icon Docs}
 */
export const FileCloseFill = memo(Icon)
