import React, { Component } from 'react';
import './styles/Success.css';

export class Success extends Component {
    render() {
        const { TOSYMBOL, FROMSYMBOL, PRICE } = this.props.data;
        return (
            <div className="alert alert-success">
                <p className="text-success">El precio en {TOSYMBOL} de {FROMSYMBOL} es de ${PRICE}</p>
            </div>
        )
    }
}

export default Success;
