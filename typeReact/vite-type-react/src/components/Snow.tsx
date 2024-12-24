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

  useEffect(() => {
    if (refs.current) {
      const startAniXY = () => {
        const currentTransform = window.getComputedStyle(
          refs.current[0]!,
        ).transform;
        const matrix = new DOMMatrix(currentTransform);
        const currentX = matrix.m41;
        const currentY = matrix.m42;

        if (parentRef.current && refs.current[0]) {
          const ZERO = 0;

          const parentWidth = parentRef.current.clientWidth;
          const parentHeight = parentRef.current.clientHeight;

          const itemWidth = refs.current[0].clientWidth;
          const itemHeight = refs.current[0].clientHeight;

          const maxRight = parentWidth - itemWidth;
          const maxHeight = parentHeight - itemHeight;

          let moveX = 0;
          let moveY = 0;
          let durationTime = 0;

          if (currentY === 0) {
            moveX = maxRight;
            moveY = Math.floor(Math.random() * 1170);
            durationTime = Math.floor(Math.random() * 10) + DURATION_TIME;

            refs.current[0].style.transition = `transform ${durationTime}s ease`;
            refs.current[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
          } else if (currentY > 10) {
            if (currentX == 0 || currentX == maxRight) {
              moveX = currentX == 0 ? maxRight : ZERO;

              if (currentY >= maxHeight) {
                durationTime = ZERO;
                moveY = ZERO;
              } else if (currentY <= maxHeight) {
                durationTime = Math.floor(Math.random() * 10) + DURATION_TIME;
                moveY = currentY + Math.floor(Math.random() * 1170);

                if (maxHeight <= moveY) {
                  moveY = maxHeight;
                }
              }

              refs.current[0].style.transition = `transform ${durationTime}s ease`;
              refs.current[0].style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
          }
        }

        requestAnimationFrame(startAniXY);
      };

      startAniXY();
    }
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
