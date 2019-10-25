import React from 'react'
import $ from 'jquery' // 18.2

export default class App extends React.Component {
    componentDidMount() { // 18.2 метод говорит что код находится в ХТМЛ / это код из header component
        $('<h1 />') 
        .text('Hello world from JQ')
        .css({
        textAlign: 'center',
        color: '#428eff',
        border: '1px solid #ccc'
        })
        .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
                <header></header>
                <hr />
                <div className="box">
                    <h2 className="box-title">Box</h2>
                    <p className="box-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam itaque, 
                        aliquam omnis repellat accusamus voluptatem officia voluptatum nesciunt esse? 
                        Nostrum exercitationem illo hic ullam nobis perferendis, quas repellendus magnam. Provident.
                    </p>
                </div>
            </React.Fragment>

        )
    }
} 