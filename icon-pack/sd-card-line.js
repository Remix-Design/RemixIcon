import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 7.82843V20H18V4H9.82843L6 7.82843ZM4.29289 6.70711L9 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7.41421C4 7.149 4.10536 6.89464 4.29289 6.70711ZM15 5H17V9H15V5ZM12 5H14V9H12V5ZM9 6H11V9H9V6Z" />
    </Svg>
  )
}

Icon.displayName = 'SdCardLine'

/**
 * Remix Icon: Sd Card Line
 * @see {@link https://remixicon.com/icon/sd-card-line Remix Icon Docs}
 */
export const SdCardLine = memo(Icon)
