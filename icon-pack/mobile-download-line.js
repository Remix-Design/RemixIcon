import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 4V20H17V12H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H13V4H7ZM19 6H22L18 10L14 6H17V2H19V6ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z" />
    </Svg>
  )
}

Icon.displayName = 'MobileDownloadLine'

/**
 * Remix Icon: Mobile Download Line
 * @see {@link https://remixicon.com/icon/mobile-download-line Remix Icon Docs}
 */
export const MobileDownloadLine = memo(Icon)
