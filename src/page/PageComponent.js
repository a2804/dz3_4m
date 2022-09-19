import React from 'react';
import kind from "./PageC.module.css"

class PageComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1 className={kind.title}>PageC</h1>
                <ul className={kind.cont}>
                    <li>{this.props.comp.name}</li>
                    <li>{this.props.comp.age}</li>
                </ul>
            </>
        )
    }
}

export default PageComponent;