import React from 'react';
import './List.css';
import Card from './Card'

class List extends React.Component{
    render(){
        return(
            <section className='List'>
                <header className="List-header">
                    <h2>
                        {this.props.header}
                    </h2>
                </header>
                <div className='List-cards'>
                    {this.props.cards.map(card => 
                        <Card 
                            key={card.id}
                            cardID={card.id}
                            title={card.title}
                            content={card.content}
                            onDeleteItem={this.props.onDeleteItem}
                        />
                    )}
                    <button 
                    onClick={()=>this.props.onAddItem(this.props.listId)}
                    type='button' className='List-add-button'> + Add Random Card </button>
                </div>
            </section>
        )
    }   
}

export default List;