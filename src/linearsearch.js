import React, { Component } from 'react';

class LinearSearch extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            count: ''
        }
    }

    static defaultProps = {
        searchValue: ''
    }

    unsortedArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

    linearSearchCount(array, value) {
        let intValue = parseInt(value);
        let count = 0;
        console.log(array.length);
        for (let i = 0; i < array.length; i++) {
            count++
            if (array[i] === intValue) {
                return count;
            }
        }
        return "Value not found";
    }

    handleSubmit(event) {
        event.preventDefault();
        let count = this.linearSearchCount(this.unsortedArr, this.props.searchValue);
        this.setState({count});
    }

    render() {
        return(
            <div>
                <h2>Perform linear search for value</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <button type='submit'>Linear Search</button>
                </form>
                <h3>Number of tries:</h3>
                <div>{this.state.count}</div>
            </div>
            
        )
    }
}

export default LinearSearch;