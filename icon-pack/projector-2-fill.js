import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 19V21H20V19H4V21H2V19C1.44772 19 1 18.5523 1 18V6C1 5.44772 1.44772 5 2 5H11.8096C12.9925 3.76733 14.6566 3 16.5 3C18.3434 3 20.0075 3.76733 21.1904 5H22C22.5523 5 23 5.44772 23 6V18C23 18.5523 22.5523 19 22 19ZM16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14ZM16.5 12C15.1193 12 14 10.8807 14 9.5C14 8.11929 15.1193 7 16.5 7C17.8807 7 19 8.11929 19 9.5C19 10.8807 17.8807 12 16.5 12ZM4 13V15H6V13H4ZM8 13V15H10V13H8Z" />
    </Svg>
  )
}

Icon.displayName = 'Projector2Fill'

/**
 * Remix Icon: Projector 2 Fill
 * @see {@link https://remixicon.com/icon/projector-2-fill Remix Icon Docs}
 */
export const Projector2Fill = memo(Icon)
