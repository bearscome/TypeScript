import { useEffect, useRef, useState } from "react";

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
    if (refs.current && parentRef.current) {
      for (let i = 0; i < count; i++) {
        if (refs.current[i] && parentRef.current) {
          const parent = parentRef.current;
          const current = refs.current[i];

          const parentWidth = parent.clientWidth;
          const parentHeight = parent.clientHeight;

          const itemWidth = current!.clientWidth;
          const itemHeight = current!.clientHeight;

          const maxRight = parentWidth - itemWidth;
          const maxBottom = parentHeight - itemHeight;

          let moveX = 0;
          let moveY = 0;
          let durationTime = Math.floor(Math.random() * 10) + DURATION_TIME;

          moveX = maxRight - current!.getBoundingClientRect().left;
          moveY = Math.floor(Math.random() * maxBottom);

          refs.current[i]!.style.transition = `transform ${durationTime}s ease`;
          refs.current[i]!.style.transform =
            `translate(${moveX}px, ${moveY}px)`;
        }
      }
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
          onAnimationStart={() => {
            console.log("start");
          }}
          onTransitionEnd={() => {
            if (refs.current) {
              const endDom = refs.current[i]!;

              if (endDom && parent) {
                const current = endDom;
                const parent = parentRef.current;

                const parentWidth = parent.clientWidth;
                const parentHeight = parent.clientHeight;

                const itemWidth = current!.clientWidth;
                const itemHeight = current!.clientHeight;

                const maxRight = parentWidth - itemWidth;
                const maxBottom = parentHeight - itemHeight;

                const currentTransform = window.getComputedStyle(
                  endDom!,
                ).transform;
                const matrix = new DOMMatrix(currentTransform);
                const currentX = Math.floor(matrix.m41);
                const currentY = Math.floor(matrix.m42);

                let moveX = 0;
                let moveY = 0;
                let durationTime =
                  Math.floor(Math.random() * 10) + DURATION_TIME;

                if (currentY >= maxBottom) {
                  moveY = 0;

                  current!.style.opacity = "0";
                  current!.style.transition = `transform ${0.001}s`;
                  current!.style.transform = `translate(${moveX}px, ${moveY}px)`;

                  current!.style.opacity = "1";
                } else {
                  if (currentX === 0) {
                    moveX = maxRight - current!.getBoundingClientRect().left;
                  }

                  moveY = currentY + Math.floor(Math.random() * maxBottom);

                  current!.style.transition = `transform ${1}s ease`;
                  current!.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
              }
            }
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
