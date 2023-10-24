import TopMenuItem from './topMenuItem';

export default function TopMenu() {
  const getMenuTypeList = () => {
    fetch('top-menu', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    return;
  };

  return <div>{}</div>;
}
