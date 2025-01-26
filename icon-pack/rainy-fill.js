import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.86 18L12.7071 14.8471C12.3166 14.4566 11.6834 14.4566 11.2929 14.8471L8.18137 17.9586C4.14765 17.5486 1 14.1419 1 10C1 5.58172 4.58172 2 9 2C11.9967 2 14.6086 3.64768 15.9791 6.08651C16.3109 6.02963 16.652 6 17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H15.86ZM10.2322 18.7322L12 16.9645L13.7678 18.7322C14.7441 19.7085 14.7441 21.2915 13.7678 22.2678C12.7915 23.2441 11.2085 23.2441 10.2322 22.2678C9.25592 21.2915 9.25592 19.7085 10.2322 18.7322Z" />
    </Svg>
  )
}

Icon.displayName = 'RainyFill'

/**
 * Remix Icon: Rainy Fill
 * @see {@link https://remixicon.com/icon/rainy-fill Remix Icon Docs}
 */
export const RainyFill = memo(Icon)
