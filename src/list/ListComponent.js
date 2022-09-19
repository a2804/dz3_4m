import React from 'react';
import kind from "./ListC.module.css"

class ListComponent extends React.Component{

    constructor (props) {
        super (props);
    }

    render() {
        return (
            <div>
                <h1 className={kind.title}>ListC</h1>
                <ul className={kind.cont}>
                    <li>{this.props.comp.name}</li>
                    <li>{this.props.comp.age}</li>
                </ul>
            </div>
        )
    }
}

export default ListComponent;