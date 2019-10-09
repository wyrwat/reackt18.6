var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
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

console.log('constructor() : metoda wywolywana przed zamontowaniem komponentu do drzewa DOM, dzieki niej inicjalizujemy stan komponentu ');
console.log('componentWillMount() : przeprowadzanie komponentu glownego ktora mozna wykonac tylko w czasie wykonywania, niejest czesto stosowana');
console.log('componentDidMount() : uzywamy np. przy pobieraniu danych z serwera z wywolywaniami z AJAX');
console.log('componentWillReceiveProps(nextProps) : jezeli stan komonentu wynika z wielu propsow ');
console.log('componentWillUpdate(nextProps, nextState) : start animacji');
console.log('componentDidUpdate(prevProps, prevState) :pobieranie danych z serwera, rakcja na zmiany w DOM');
console.log('componentWillUnmount() : usuwanie event listenerow dodanych w  componentDidMount');
console.log('shouldComponentUpdate() : kontrola kiedy komponet powinien byc re-renderowany');

