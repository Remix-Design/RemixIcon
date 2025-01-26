import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM13.0049 13.0027H16.0049V15.0027H13.0049V17.0027H11.0049V15.0027H8.00488V13.0027H11.0049V12.0027H8.00488V10.0027H10.5907L8.46935 7.88143L9.88356 6.46721L12.0049 8.58853L14.1262 6.46721L15.5404 7.88143L13.4191 10.0027H16.0049V12.0027H13.0049V13.0027Z" />
    </Svg>
  )
}

Icon.displayName = 'MoneyCnyCircleLine'

/**
 * Remix Icon: Money Cny Circle Line
 * @see {@link https://remixicon.com/icon/money-cny-circle-line Remix Icon Docs}
 */
export const MoneyCnyCircleLine = memo(Icon)
