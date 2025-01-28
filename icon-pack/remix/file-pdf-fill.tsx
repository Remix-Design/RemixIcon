import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8H8V16H12ZM10 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14H10V10Z" />
    </Svg>
  )
}

Icon.displayName = 'FilePdfFill'

/**
 * Remix Icon: File Pdf Fill
 * @see {@link https://remixicon.com/icon/file-pdf-fill Remix Icon Docs}
 */
export const FilePdfFill = memo(Icon)
