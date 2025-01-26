import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V11H20V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM21 13C21.5523 13 22 13.4477 22 14V20C22 20.5523 21.5523 21 21 21H13C12.4477 21 12 20.5523 12 20V14C12 13.4477 12.4477 13 13 13H21ZM11.5 7L9.45711 9.04311L11.7071 11.2929L10.2929 12.7071L8.04311 10.4571L6 12.5V7H11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'PictureInPictureExitFill'

/**
 * Remix Icon: Picture In Picture Exit Fill
 * @see {@link https://remixicon.com/icon/picture-in-picture-exit-fill Remix Icon Docs}
 */
export const PictureInPictureExitFill = memo(Icon)
