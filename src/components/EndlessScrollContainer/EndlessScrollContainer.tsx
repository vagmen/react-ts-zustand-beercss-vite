import { ReactElement, useEffect, useRef } from "react";
import styles from "./EndlessScrollContainer.module.css";
import { throttle } from "lodash";

interface IEndlessScrollContainer {
  children: ReactElement;
  onLoadItems: () => void;
  scrollDistanceToEnd?: number;
  count: number;
  minRequestInterval?: number;
}

export const EndlessScrollContainer = ({
  children,
  onLoadItems,
  scrollDistanceToEnd = 500,
  count = 0,
  minRequestInterval = 1000,
}: IEndlessScrollContainer) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollAndResizeHandler, true);
    window.addEventListener("resize", scrollAndResizeHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollAndResizeHandler, true);
      window.removeEventListener("resize", scrollAndResizeHandler, true);
      // clearPassages();
    };
  }, []);

  const scrollAndResizeHandler = throttle(() => {
    const node = ref?.current;
    if (node) {
      const { scrollHeight, offsetHeight, scrollTop } = node;
      const scrollBottom = scrollHeight - offsetHeight - scrollTop;
      const needAdditionalItems = scrollBottom < scrollDistanceToEnd;
      if (needAdditionalItems) {
        onLoadItems();
      }
    }
  }, minRequestInterval);

  useEffect(() => {
    scrollAndResizeHandler();
  }, [count]);

  return (
    <div className={styles.scrollable} ref={ref}>
      {children}
    </div>
  );
};
