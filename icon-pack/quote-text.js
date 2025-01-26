import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z" />
    </Svg>
  )
}

Icon.displayName = 'QuoteText'

/**
 * Remix Icon: Quote Text
 * @see {@link https://remixicon.com/icon/quote-text Remix Icon Docs}
 */
export const QuoteText = memo(Icon)
