import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 17V23H12V17H9L13 12L17 17H14ZM16 19H19V16H18.2L13 9.5L7.64706 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H10V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H16V19ZM7 5V7H9V5H7ZM7 8V10H9V8H7Z" />
    </Svg>
  )
}

Icon.displayName = 'GitRepositoryCommitsFill'

/**
 * Remix Icon: Git Repository Commits Fill
 * @see {@link https://remixicon.com/icon/git-repository-commits-fill Remix Icon Docs}
 */
export const GitRepositoryCommitsFill = memo(Icon)
