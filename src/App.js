import Accordion from "./components/Accordion";

function App() {

  const items = [
    {
      id: 'sfjs',
      label: 'Can I use React?',
      content: 'You can use React You can use React You can use React You can use React You can use React'
    },
    {
      id: 'ssfg',
      label: 'Can I use JS?',
      content: 'You can use JS You can use JS You can use JS You can use JS You can use JS You can use JS'
    },
    {
      id: 'sgjhkyuk',
      label: 'Can I use CSS?',
      content: 'You can use CSS You can use CSS You can use CSS You can use CSS You can use CSS You can use CSS'
    },
  ];

  return <Accordion items={items} />;
}

export default App;
