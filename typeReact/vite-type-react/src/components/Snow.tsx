import { useEffect, useRef, useState } from "react";

interface SnowProps {
  width: number | string;
  height: number | string;
  count: number;
  durationTime: number;
  colorList: string[];
  reset: boolean;
}

const Snow = (props: SnowProps) => {
  const { width, height, count, durationTime, colorList, reset } = props;

  const [key, setKey] = useState(0);

  const parentRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const initialOffset: any[] = [];

  useEffect(() => {
    if (refs.current && parentRef.current) {
      if (initialOffset.length > 0) {
        initialOffset.length = 0;
      }
      for (let i = 0; i < count; i++) {
        initialOffset.push(refs.current[i]!.getBoundingClientRect());
        setTransition(i);
      }
    }
  }, [width, height, count, durationTime, key]);

  useEffect(() => {
    setKey((value) => value + 1);
  }, [reset]);

  const setTransition = (index: number): void => {
    const wrapRef = parentRef.current;
    const currentRef = refs.current[index]!;

    if (wrapRef && currentRef && initialOffset) {
      const parentWidth = wrapRef.clientWidth;
      const parentHeight = wrapRef.clientHeight;
      const itemHeight = currentRef.clientHeight;

      const maxRight = parentWidth - initialOffset[index]?.right;
      const maxLeft = -initialOffset[index]?.left;
      const maxBottom = parentHeight - itemHeight;

      const currentTransform = window.getComputedStyle(currentRef).transform;
      const matrix = new DOMMatrix(currentTransform);
      const currentY = Math.floor(matrix.m42);

      let moveX = 0;
      let moveY = 0;
      let duration = Math.floor(Math.random() * 10) + durationTime;

      if (currentY >= maxBottom) {
        duration = 0.0001;
        currentRef.style.opacity = "0";
        currentRef.style.transition = `transform ${duration}s`;
        currentRef.style.transform = `translate(${moveX}px, ${moveY}px)`;
        currentRef.style.opacity = "1";
      } else {
        moveX = Math.floor(Math.random() * 2) === 0 ? maxRight : maxLeft;
        moveY = currentY + Math.floor(Math.random() * maxBottom);

        if (moveY > maxBottom) {
          moveY = maxBottom;
        }

        currentRef.style.transition = `transform ${duration}s ease`;
        currentRef.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    }
  };

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
            backgroundColor: colorList[i % colorList.length],
          }}
          onTransitionEnd={() => {
            setTransition(i);
          }}
        ></div>,
      );
    }

    return itemList;
  };

  return (
    <div
      key={key}
      ref={parentRef}
      style={{
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {setSnowItem()}
    </div>
  );
};

export default Snow;
