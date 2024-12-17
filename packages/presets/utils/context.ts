import type { Theme } from '@unocss/preset-mini';
import type { CSSValue, ShortcutValue } from 'unocss';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { colorName } from '.';

/** 颜色的明亮度差值 */
const colorDiff: Record<string, number> = {
  50: -500,
  100: -400,
  200: -300,
  300: -200,
  400: -100,
  500: 0,
  600: 100,
  700: 200,
  800: 300,
  900: 400,
  950: 500,
};

const colorKeys = Object.keys(colorDiff);

/**
 * 初始化context颜色的配置
 * @returns 预设context颜色
 *
 * @example
 * ```ts
 * getContextColor() =>
 * {
 *   'DEFAULT': 'hsl(var(--mt-reserve-DEFAULT, var(--mt-context-DEFAULT)))',
 *   '50': 'var(var(--mt-reserve-50, var(--mt-context-50)))',
 *   '100': 'var(var(--mt-reserve-100, var(--mt-context-100)))',
 *   ...
 * }
 * ```
 */
export function getContextColor() {
  const keys = colorKeys.concat('DEFAULT');
  return Object.fromEntries(keys.map((k) => {
    const reserveValue = colorName('reserve', k); // context的反转的明亮度
    const contextValue = colorName('context', k); // context的正常的明亮度
    return [k, `hsl(var(${reserveValue}, var(${contextValue})))`];
  }));
}

/**
 * 设置的context反转明亮度
 * @returns
 * ```ts
 * {
 *    --mt-reserve-50: var(--mt-context-950);
 *    --mt-reserve-100: var(--mt-context-900);
 *    --mt-reserve-200: var(--mt-context-800);
 *    ...
 * }
  ```
 */
export function reserveContextColor(): CSSValue {
  const cssValue: CSSValue = {};
  for (let i = 0, j = colorKeys.length - 1; i < colorKeys.length; i++, j--) {
    cssValue[`${colorName('reserve', colorKeys[i])}`] = `var(${colorName('context', colorKeys[j])})`;
  }
  return cssValue;
}

/** 提取预设中的颜色明亮度 */
export function getContextLightness(preset: Record<string, ShortcutValue>) {
  const lightness: string[] = [];
  Object.values(preset).forEach((str) => {
    if (typeof str === 'string') {
      const matches = str.match(/-context([-\d]*)/g);
      if (matches) {
        matches.forEach((match) => {
          const value = match.replace(/-context-?/, '');
          lightness.push(value);
        });
      }
    }
  });
  return Array.from(new Set(lightness));
}

/**
 * 指定context的颜色以及所对应的颜色明亮度
 * @param str 颜色值，可以是theme中设置的颜色，css中颜色值
 * @param theme 预设主题
 * @param lightness 需要生成的明亮度
 * @returns context颜色对应的各个明亮度颜色值
 *
 * @example
 * ```ts
 * resolveContextColor(danger-500, theme, [500,400,600])
 * => {
 * '--mt-context-500': 'var(--mt-danger-600, 1 77 55)',
 * '--mt-context-400': 'var(--mt-danger-500, 1 90 60)',
 * '--mt-context-600': 'var(--mt-danger-700, 1 78 42)',
 * }
 * ```
 */
export function resolveContextColor(str: string, theme: Theme, lightness: string[]) {
  if (str.includes('context')) {
    return '';
  }

  const parsedColor = parseColor(str, theme);
  if (!parsedColor) {
    return '';
  }

  const { color, cssColor } = parsedColor;
  // 颜色是theme中配置的预设颜色
  if (color && cssColor && color.includes('var(--mt-')) {
    const [h, s, l] = cssColor.components;
    const colorValues = lightness.map((key) => {
      if (!key || key === 'DEFAULT') {
        return [h, s, l].join(' ');
      }
      const diff = colorDiff[key] / 10;
      const value = `calc(${l} - ${diff})`;
      return [h, s, value].join(' ');
    });
    return Object.fromEntries(lightness.map((key, index) => {
      return [`--mt-context-${key || 'DEFAULT'}`, colorValues[index]];
    }));
  }
  // 非此库中预设的颜色
  if (color && cssColor && mc.valid(color)) {
    const [h, s, l] = mc(color).hsl();
    const colorValues = lightness.map((key) => {
      if (!key || key === 'DEFAULT') {
        return [h, s, l].join(' ');
      }
      const diff = colorDiff[key] / 10;
      const value = l - diff;
      return [h, s, value].join(' ');
    });
    return Object.fromEntries(lightness.map((key, index) => {
      return [`--mt-context-${key || 'DEFAULT'}`, colorValues[index]];
    }));
  }

  return '';
}
