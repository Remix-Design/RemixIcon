import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.6779 7.97918L20.2637 9.39339L18.1424 7.27207L16.021 9.39339L19.5566 12.9289L18.1424 14.3431L17.4353 13.636L11.0713 20H5.41444L3.29312 22.1213L1.87891 20.7071L4.00023 18.5858V12.9289L10.3642 6.56497L9.65708 5.85786L11.0713 4.44365L14.6068 7.97918L16.7281 5.85786L14.6068 3.73654L16.021 2.32233L21.6779 7.97918ZM16.021 12.2218L11.7784 7.97918L10.3642 9.39339L12.4855 11.5147L11.0713 12.9289L8.94997 10.8076L7.53576 12.2218L9.65708 14.3431L8.24287 15.7574L6.12155 13.636L6.00023 13.7574V18H10.2429L16.021 12.2218Z" />
    </Svg>
  )
}

Icon.displayName = 'SyringeLine'

/**
 * Remix Icon: Syringe Line
 * @see {@link https://remixicon.com/icon/syringe-line Remix Icon Docs}
 */
export const SyringeLine = memo(Icon)
