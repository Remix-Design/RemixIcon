import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 13.126C21.0149 12.4174 19.8062 12 18.5 12C15.1863 12 12.5 14.6863 12.5 18C12.5 19.0929 12.7922 20.1175 13.3027 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V13.126ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderReceivedFill'

/**
 * Remix Icon: Folder Received Fill
 * @see {@link https://remixicon.com/icon/folder-received-fill Remix Icon Docs}
 */
export const FolderReceivedFill = memo(Icon)
