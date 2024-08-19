import { ThemeConfig } from 'antd'
import { colors } from './colors'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: colors.token.primaryBlue,
    colorBgBase: colors.token.lightGrey10,
    colorPrimaryText: colors.token.primaryNavy,
    colorInfoBg: colors.token.grayLightBg20,
    colorIcon: colors.token.grayDark,
    colorBorder: colors.token.grayMedium30,
    colorBgContainerDisabled: colors.token.lightBlue,
    colorBgContainer: colors.token.white,
    colorFill: colors.token.green,
    colorError: colors.token.pink,
    colorWarning: colors.token.yellow,
  },
}
