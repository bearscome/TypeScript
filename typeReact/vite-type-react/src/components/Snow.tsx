import { useEffect, useRef } from "react";

interface SnowProps {
  width: number;
  height: number;
  count: number;
}

const Snow = (props: SnowProps) => {
  const { width, height, count } = props;
  const parentRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (refs.current) {
      const parentHeight = parentRef.current!.clientHeight;

      for (let i = 0; i < refs.current.length; i++) {
        if (refs.current[i]) {
          const itemHeight = refs.current[i]!.clientHeight;
          setAniTransY({ index: i, parentHeight, itemHeight });
        }
      }
    }
  }, []);

  const resetTransY = (index: number): void => {
    const parentHeight = parentRef.current!.clientHeight;
    const itemHeight = refs.current[index]!.clientHeight;

    refs.current[index]!.style.transition = "transform 0s";
    refs.current[index]!.style.transform = "translateY(0px)";

    setAniTransY({ index, parentHeight, itemHeight });
  };

  const setAniTransY = ({
    index,
    parentHeight,
    itemHeight,
  }: {
    index: number;
    parentHeight: number;
    itemHeight: number;
  }): void => {
    refs.current[index]!.style.transition = "transform 2s ease";
    refs.current[index]!.style.transform =
      ` translateY(${parentHeight - itemHeight}px)`;
  };

  const setSnowItem = () => {
    const itemList = [];

    for (let i = 0; i < count; i++) {
      const posX = Math.floor(Math.random() * 100);
      const colorList = ["green", "blue", "red", "white", "yellow"];

      itemList.push(
        <div
          ref={(el) => (refs.current[i] = el)}
          id={String(i)}
          key={i}
          style={{
            width,
            height,
            borderRadius: "100%",
            backgroundColor: colorList[i % 5],
            transform: `translate(${posX}%, 0px)`,
          }}
          onTransitionEnd={() => resetTransY(i)}
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
