import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 32 32" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M7.73334 15.0667L2.66667 29.3333L16.9333 24.28M5.33334 3.99999H5.34667M29.3333 10.6667H29.3467M20 2.66666H20.0133M29.3333 26.6667H29.3467M29.3333 2.66666L26.3467 3.66666C25.4965 3.94984 24.7711 4.51951 24.2944 5.27829C23.8178 6.03707 23.6194 6.93785 23.7333 7.82666C23.8667 8.97332 22.9733 9.99999 21.8 9.99999H21.2933C20.1467 9.99999 19.16 10.8 18.9467 11.92L18.6667 13.3333M29.3333 17.3333L28.24 16.8933C27.0933 16.44 25.8133 17.16 25.6 18.3733C25.4533 19.3067 24.64 20 23.6933 20H22.6667M14.6667 2.66666L15.1067 3.75999C15.56 4.90666 14.84 6.18666 13.6267 6.39999C12.6933 6.53332 12 7.35999 12 8.30666V9.33332M14.6667 17.3333C17.24 19.9067 18.44 22.8933 17.3333 24C16.2267 25.1067 13.24 23.9067 10.6667 21.3333C8.09334 18.76 6.89334 15.7733 8.00001 14.6667C9.10667 13.56 12.0933 14.76 14.6667 17.3333Z"
        stroke="#6935F0"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'PartyPopper'

/**
 * Lucide Icon: Party Popper
 * @see {@link https://lucide.dev/icons/party-popper Lucide Icon Docs}
 */
export const PartyPopper = memo(Icon)
