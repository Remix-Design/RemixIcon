import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.3277 4.25809L10.5858 12L12 13.4142L19.7419 5.6723C21.153 7.39641 22 9.5999 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C14.4001 2 16.6036 2.84695 18.3277 4.25809Z" />
    </Svg>
  )
}

Icon.displayName = 'Compass2Fill'

/**
 * Remix Icon: Compass 2 Fill
 * @see {@link https://remixicon.com/icon/compass-2-fill Remix Icon Docs}
 */
export const Compass2Fill = memo(Icon)
