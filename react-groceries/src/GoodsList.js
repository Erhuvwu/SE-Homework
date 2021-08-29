import React, { Component } from 'react';

class GoodsList extends Component {
    state = {
        isPurchased: false
    }

    render() {
        return (
            <div>
                <li onClick={() => this.props.handleAdd(this.props.good)}>
                    {this.props.good.item} {this.props.good.quantity} {this.props.good.units}
                </li>
                {/* <button onClick={() => this.props.handleRemove(this.props.good)}>Remove Good</button> */}

            </div>
        );
    }
}

export default GoodsList;