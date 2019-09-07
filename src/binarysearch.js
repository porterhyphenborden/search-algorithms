import React, { Component } from 'react';

class BinarySearch extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            count: ''
        }
    }

    static defaultProps = {
        array: [],
        searchValue: ''
    }


    binarySearchCount(numArray, value, start, end, count) {
        count = count === undefined ? 0 : count;
        start = start === undefined ? 0 : start;
        end = end === undefined ? numArray.length : end;

        if (start > end) {
            return "Value not found";
        }

        const index = Math.floor((start + end) / 2);
        const item = numArray[index];

        if (item == value) {
            count++;
            return count;
        }
        else if (item < value) {
            count++
            return this.binarySearchCount(numArray, value, index + 1, end, count);
        }
        else if (item > value) {
            count++
            return this.binarySearchCount(numArray, value, start, index - 1, count);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let arrayCopy = this.props.array;
        let value = this.props.searchValue;
        let intValue = parseInt(value);
        let sortedArray = arrayCopy.sort((a, b) => (a - b));
        let count = this.binarySearchCount(sortedArray, intValue);
        this.setState({count: count});
    }

    render() {
        return(
            <div>
                <h2>Perform binary search for value</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <button type='submit'>Binary Search</button>
                </form>
                <h3>Number of tries:</h3>
                <div>{this.state.count}</div>
            </div>
            
        )
    }
}

export default BinarySearch;