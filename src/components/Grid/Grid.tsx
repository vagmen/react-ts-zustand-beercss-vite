import { ReactElement } from "react";

interface IGrid<IItem> {
  items: IItem[];
  buildGridItem: (item: IItem) => ReactElement;
}
export const Grid = <IItem,>({ items, buildGridItem }: IGrid<IItem>) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div className="s12 m6 l3" key={index}>
          {buildGridItem(item)}
        </div>
      ))}
    </div>
  );
};
