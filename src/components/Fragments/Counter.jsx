import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log('constructor');
    }

    componentDidMount() {
        this.setState({ count: 1 })
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        if (this.state.count === 10) {
            this.setState({ count: 0 })
        }
    }
    render() {
        return (
            <div className='flex justify-center items-center'>
                <h1 className='text-xl mr-5'>{this.state.count}</h1>
                <button className='bg-black text-white p-3 rounded' onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                {console.log('render')}
            </div>
        )
    }
}
