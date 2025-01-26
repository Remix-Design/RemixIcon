import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM13 13V9H11V13H8L12 17L16 13H13Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderDownloadFill'

/**
 * Remix Icon: Folder Download Fill
 * @see {@link https://remixicon.com/icon/folder-download-fill Remix Icon Docs}
 */
export const FolderDownloadFill = memo(Icon)
