import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275V9.00275H11.0049V11.0027H15.0049V13.0027L18.5049 10.0027L15.0049 7.00275ZM9.00488 17.0027V15.0027H13.0049V13.0027H9.00488V11.0027L5.50488 14.0027L9.00488 17.0027Z" />
    </Svg>
  )
}

Icon.displayName = 'SwapBoxFill'

/**
 * Remix Icon: Swap Box Fill
 * @see {@link https://remixicon.com/icon/swap-box-fill Remix Icon Docs}
 */
export const SwapBoxFill = memo(Icon)
