import { MenuItemType } from 'src/types/menuTypeItem';

export default function TopMenuItem(menu: MenuItemType) {
  return <div key={menu.id}>{menu.name}</div>;
}
