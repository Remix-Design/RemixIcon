import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 2V22H3V2H7ZM19.0049 2C20.1068 2 21 2.89821 21 3.9908V20.0092C21 21.1087 20.1074 22 19.0049 22H9V2H19.0049ZM15 8L11 12H14V16H16V12H19L15 8ZM24 12V16H22V12H24ZM24 6V10H22V6H24Z" />
    </Svg>
  )
}

Icon.displayName = 'ContactsBookUploadFill'

/**
 * Remix Icon: Contacts Book Upload Fill
 * @see {@link https://remixicon.com/icon/contacts-book-upload-fill Remix Icon Docs}
 */
export const ContactsBookUploadFill = memo(Icon)
