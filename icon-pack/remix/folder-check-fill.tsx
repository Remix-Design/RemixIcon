import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 13C20.0929 13 21.1175 13.2922 22 13.8027V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13.3414C13.1203 20.3744 13 19.7013 13 19C13 15.6863 15.6863 13 19 13ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderCheckFill'

/**
 * Remix Icon: Folder Check Fill
 * @see {@link https://remixicon.com/icon/folder-check-fill Remix Icon Docs}
 */
export const FolderCheckFill = memo(Icon)
