import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
