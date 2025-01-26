import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 10H16L16.0005 10.7574C16.7154 10.279 17.5751 10 18.5 10C20.9853 10 23 12.0147 23 14.5V20H21V14.5C21 13.07 19.8255 12 18.5 12C17.1745 12 16 13.07 16 14.5V20H14V10ZM12 4V6H4V11H12V13H4V18H12V20H2V4H12Z" />
    </Svg>
  )
}

Icon.displayName = 'EnglishInput'

/**
 * Remix Icon: English Input
 * @see {@link https://remixicon.com/icon/english-input Remix Icon Docs}
 */
export const EnglishInput = memo(Icon)
