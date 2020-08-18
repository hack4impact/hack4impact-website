/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.scss' {
  export const styles: { [className: string]: string };
  export default styles;
}
