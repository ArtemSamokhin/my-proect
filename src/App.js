import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул со спинкой',
          img: 'chair-with-backrest.jpg',
          description: 'Удобный мягкий стул со спинкой.',
          category: 'chairs',
          price: '1500'
        },
        {
          id: 2,
          title: 'Стол круглый',
          img: 'round-table.jpg',
          description: 'Круглый стол для зала.',
          category: 'tables',
          price: '2500'
        },
        {
          id: 3,
          title: 'Стул без спинки',
          img: 'backless-chair.jpg',
          description: 'Высокий стул без спинки.',
          category: 'chairs',
          price: '1200'
        },
        {
          id: 4,
          title: 'Стол квадратный',
          img: 'square-table.jpg',
          description: 'Вместительный квадратный стол.',
          category: 'tables',
          price: '2700'
        },
        {
          id: 5,
          title: 'Лампа настольная',
          img: 'desk-lamp.jpg',
          description: 'Эстетичная настольная лампа.',
          category: 'lamps',
          price: '3000'
        }
      ]
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App;
