import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.09742 6.15015L4.31009 14.4431L6.06471 17.4746L10.8502 9.18597L9.09742 6.15015ZM7.79701 18.4742H17.3651L19.1162 15.44H9.54877L7.79701 18.4742ZM19.1109 13.44L14.3252 5.15002H10.8294L15.6156 13.44H19.1109ZM8.52 3.15002H15.48L22 14.4444L18.52 20.4742H5.49L2 14.4444L8.52 3.15002ZM12.0049 11.186L10.7035 13.44H13.3062L12.0049 11.186Z" />
    </Svg>
  )
}

Icon.displayName = 'DriveLine'

/**
 * Remix Icon: Drive Line
 * @see {@link https://remixicon.com/icon/drive-line Remix Icon Docs}
 */
export const DriveLine = memo(Icon)
