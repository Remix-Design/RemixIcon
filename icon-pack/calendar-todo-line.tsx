import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 14V16H6V14H8ZM18 14V16H10V14H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" />
    </Svg>
  )
}

Icon.displayName = 'CalendarTodoLine'

/**
 * Remix Icon: Calendar Todo Line
 * @see {@link https://remixicon.com/icon/calendar-todo-line Remix Icon Docs}
 */
export const CalendarTodoLine = memo(Icon)
