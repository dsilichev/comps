import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-green-500", score: 3 },
    { name: "Peach", color: "bg-orange-300", score: 1 },
    { name: "Grape", color: "bg-indigo-500", score: 6 },
    { name: "Mango", color: "bg-yellow-200", score: 2 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return <SortableTable data={data} config={config} keyFn={keyFn} />;
}

export default TablePage;
