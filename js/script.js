var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
        	return {

            }    
    },

    componentWillMount: function() {
        return {

        }
    },

    componentsDidmount: function() {
        return {

        }
    },

    render: function() {
        return {

        }
    },

    componentsWillReceiveProps(nextProps) {

    },

    shouldComponentUpdate(nextProps, nextState) {

    },

    componentWillUpdate(nextprops, nextState) {

    },

    componentDidUpdate(prevProps, prevState) {

    },

    componentWillUnmount: function() {
        return {
            
        }
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return ( 
            React.createElement('div', {className: 'container'},
            
            React.createElement('div', {onClick: this.increment},
                React.createElement('button', {}, 'Add ' + this.state.counter)
             ),
            React.createElement('div', {onClick: this.decrement},
                React.createElement('button', {}, 'Substract ' + this.state.counter)    
                )
            )
        )        
    }
});

var secondCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 2
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 2
        });
    },

    render: function() {
        return ( 
            React.createElement('div', {className: 'container'},
            
            React.createElement('div', {onClick: this.increment},
                React.createElement('button', {}, 'Add ' + this.state.counter)
             ),
            React.createElement('div', {onClick: this.decrement},
                React.createElement('button', {}, 'Substract ' + this.state.counter)    
                )
            )
        ) 
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var element2 = React.createElement(secondCounter);
ReactDOM.render(element2, document.getElementById('app2'));