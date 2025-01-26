import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.5843 13.0069C1.20753 12.0786 1 11.0635 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 12.6709 22.9922 12.8399 22.977 13.0069H1.5843ZM4 19H21V21H4V19ZM2 15H23V17H2V15Z" />
    </Svg>
  )
}

Icon.displayName = 'FoggyFill'

/**
 * Remix Icon: Foggy Fill
 * @see {@link https://remixicon.com/icon/foggy-fill Remix Icon Docs}
 */
export const FoggyFill = memo(Icon)
