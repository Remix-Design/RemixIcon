import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7429 18.3287C21.1536 16.6049 22 14.4013 22 12C22 6.47715 17.5228 2 12 2C9.59873 2 7.39514 2.84637 5.67127 4.25705L11.9142 10.5H13V11.5858L19.7429 18.3287ZM10 11.4142L4.25705 5.67127C2.84637 7.39514 2 9.59873 2 12C2 17.5228 6.47715 22 12 22C14.4013 22 16.6049 21.1536 18.3287 19.7429L14 15.4142V17H10V15H11V12.5H10V11.4142ZM13.5858 15H13V14.4142L13.5858 15ZM13.5 8C13.5 8.82843 12.8284 9.5 12 9.5C11.1716 9.5 10.5 8.82843 10.5 8C10.5 7.17157 11.1716 6.5 12 6.5C12.8284 6.5 13.5 7.17157 13.5 8Z" />
    </Svg>
  )
}

Icon.displayName = 'InformationOffFill'

/**
 * Remix Icon: Information Off Fill
 * @see {@link https://remixicon.com/icon/information-off-fill Remix Icon Docs}
 */
export const InformationOffFill = memo(Icon)
