import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.2 20L19 21.5V22H5V21.5L6.8 20H5C3.89543 20 3 19.1046 3 18V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V18C21 19.1046 20.1046 20 19 20H17.2ZM7 5C5.89543 5 5 5.89543 5 7V18H19V7C19 5.89543 18.1046 5 17 5H7ZM12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17ZM6 7H18V11H6V7Z" />
    </Svg>
  )
}

Icon.displayName = 'TrainLine'

/**
 * Remix Icon: Train Line
 * @see {@link https://remixicon.com/icon/train-line Remix Icon Docs}
 */
export const TrainLine = memo(Icon)
