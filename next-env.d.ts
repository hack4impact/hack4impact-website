/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.scss' {
  export const style: { [className: string]: string };
  export default style;
}
