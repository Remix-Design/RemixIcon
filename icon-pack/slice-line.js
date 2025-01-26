import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.6909 12.9147L17.4587 14.6824C11.4482 20.6929 6.4985 20.6929 2.25586 19.2786L17.8122 3.72229L21.3477 7.25782L15.6909 12.9147ZM12.8625 12.9147L18.5193 7.25782L17.8122 6.55072L6.3145 18.0484C9.04606 18.1558 11.6722 17.142 14.5808 14.633L12.8625 12.9147Z" />
    </Svg>
  )
}

Icon.displayName = 'SliceLine'

/**
 * Remix Icon: Slice Line
 * @see {@link https://remixicon.com/icon/slice-line Remix Icon Docs}
 */
export const SliceLine = memo(Icon)
