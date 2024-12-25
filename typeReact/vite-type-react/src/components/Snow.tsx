import { useEffect, useRef } from "react";

interface SnowProps {
  width: number;
  height: number;
  count: number;
}

const Snow = (props: SnowProps) => {
  const DURATION_TIME = 2; //2
  const COLOR_LIST = ["green", "blue", "red", "white", "yellow", "purple"];

  const { width, height, count } = props;
  const parentRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRefs = useRef<any[]>([]);

  useEffect(() => {
    if (refs.current && parentRef.current) {
      const startAniXY = (index: number): void => {
        const current = refs.current[index];
        const parent = parentRef.current;

        if (parent && current) {
          const ZERO = 0;

          const currentTransform = window.getComputedStyle(current).transform;
          const matrix = new DOMMatrix(currentTransform);
          const currentX = matrix.m41;
          const currentY = matrix.m42;

          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          const itemWidth = current.clientWidth;
          const itemHeight = current.clientHeight;

          const maxRight = parentWidth - itemWidth;
          const maxBottom = parentHeight - itemHeight;

          let moveX = 0;
          let moveY = 0;
          let durationTime = 0;

          if (currentY === 0) {
            moveX = maxRight;
            moveY = Math.floor(Math.random() * maxBottom);
            durationTime = Math.floor(Math.random() * 10) + DURATION_TIME;

            current.style.transition = `transform ${durationTime}s ease`;
            current.style.transform = `translate(${moveX}px, ${moveY}px)`;
          } else if (currentY > 10) {
            if (currentX <= ZERO || currentX >= maxRight) {
              moveX = currentX == 0 ? maxRight : ZERO;

              if (currentY >= maxBottom) {
                durationTime = ZERO;
                moveY = ZERO;
              } else if (currentY <= maxBottom) {
                moveY = currentY + Math.floor(Math.random() * maxBottom);
                durationTime = Math.floor(Math.random() * 10) + DURATION_TIME;

                if (maxBottom <= moveY) {
                  moveY = maxBottom;
                }
              }

              current.style.transition = `transform ${durationTime}s ease`;
              current.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
          }

          rafRefs.current[index] = requestAnimationFrame(() =>
            startAniXY(index),
          );
        }
      };

      for (let i = 0; i < count; i++) {
        startAniXY(i);
      }
    }

    return () => {
      rafRefs.current.forEach((raf) => {
        cancelAnimationFrame(raf);
      });
    };
  }, []);

  const setSnowItem = () => {
    const itemList = [];

    for (let i = 0; i < count; i++) {
      itemList.push(
        <div
          ref={(el) => (refs.current[i] = el)}
          id={String(i)}
          key={i}
          style={{
            width,
            height,
            borderRadius: "100%",
            backgroundColor: COLOR_LIST[i % COLOR_LIST.length],
          }}
        ></div>,
      );
    }

    return itemList;
  };

  return (
    <div
      ref={parentRef}
      style={{
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      {setSnowItem()}
    </div>
  );
};

export default Snow;
