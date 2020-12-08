import React, { Component } from 'react';

class TechList extends Component {
    //um estado do Ract é imutável, nada se adiciona. O array muda de estado!
    state = {
        newTech: '',
        techs: [
            'node.js',
            'React.js',
            'React Native'
        ]
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        //O "..." copia tudo que já tem dentro do array e adiciona um novo dado no array
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],
            newTech: '' 
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}  
                </ul>
                <input 
                    type="text" 
                    onChange= {this.handleInputChange} 
                    value={this.state.newTech}
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default TechList;