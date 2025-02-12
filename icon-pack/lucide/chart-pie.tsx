import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 15 15" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_5_61)">
        <Path
          d="M13.0346 9.81075C12.6635 10.6884 12.083 11.4617 11.344 12.0632C10.605 12.6646 9.72984 13.0759 8.79515 13.261C7.86045 13.4462 6.89464 13.3995 5.98215 13.1251C5.06965 12.8508 4.23826 12.357 3.56065 11.6871C2.88305 11.0172 2.37987 10.1915 2.0951 9.28222C1.81033 8.37291 1.75264 7.4077 1.92708 6.47095C2.10151 5.5342 2.50277 4.65445 3.09575 3.9086C3.68874 3.16275 4.45541 2.57351 5.32873 2.19241M12.9121 7.54158C13.2341 7.54158 13.4983 7.27966 13.4662 6.95941C13.3317 5.62018 12.7383 4.36866 11.7864 3.41702C10.8346 2.46538 9.58291 1.87218 8.24364 1.738C7.92281 1.70591 7.66148 1.97016 7.66148 2.29216V6.95883C7.66148 7.11354 7.72293 7.26191 7.83233 7.37131C7.94173 7.4807 8.0901 7.54216 8.24481 7.54216L12.9121 7.54158Z"
          stroke={color}
          strokeWidth="1.16667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_61">
          <Rect
            width="14"
            height="14"
            fill="none"
            transform="translate(0.662109 0.539062)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ChartPie'

/**
 * Lucide Icon: Chart Pie
 * @see {@link https://lucide.dev/icons/chart-pie Lucide Icon Docs}
 */
export const ChartPie = memo(Icon)
