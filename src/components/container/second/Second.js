import 'bootstrap/dist/css/bootstrap.min.css';
import './second.css'
import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Second extends Component {
    
    constructor(props){
        super(props);
        this.state = { minutes: 0, seconds: 0, miliseconds: 0,listsSeocnd:[]}
    }

    setZero = (n) =>{
        return n < 10 ? "0" + n : n;
    }

    start = () => {
        this.t = setInterval(() => {
            this.setState((state) => {
                return { miliseconds: state.miliseconds + 1 };
            })
        }, 100)
    }

    restrat = () => {
        clearInterval(this.t);
        this.setState((state) => {
             return { minutes: 0, seconds: 0, miliseconds: 0,listsSeocnd:[] } 
    });
    }

    stop = () => {
        clearInterval(this.t);
    }

    jx = () => {
        this.setState(()=>{
            let jxSecond = [...this.state.listsSeocnd];
            let jx = this.setZero(this.state.minutes) + ":" + this.setZero(this.state.seconds) + ":" + this.setZero(this.state.miliseconds)
            jxSecond.push(jx);
            console.log(jxSecond)
            return {listsSeocnd: jxSecond}
        })
    }


    componentDidUpdate() {
        if (this.state.miliseconds > 59) {
            this.setState((state) => { return { miliseconds: 0, seconds: state.seconds + 1 } });
        }
        if (this.state.seconds > 59) {
            this.setState((state) => { return { seconds: 0, minutes: state.minutes + 1 } });
        }
        if (this.state.minutes > 59) {
            this.setState((state) => { return { minutes: 0  } });
        }
    }

    render() {
        return (
           
            <div className="mt-5 container">
             <h1>SecondTimer</h1>
                 <div  className="d-flex justify-content-center align-items-center ">
                    <h1 className="minutes text-dark">{this.setZero(this.state.minutes)}</h1>
                    <h1 className="text-secondary">:</h1>
                    <h1 className="seconds text-dark">{this.setZero(this.state.seconds)}</h1>
                    <h1 className="text-secondary">.</h1>
                    <h1 className="miliseconds text-dark">{this.setZero(this.state.miliseconds)}</h1> 
                 </div>
                <div className="d-flex justify-content-center mb-5">
                    <a href="#" className="btn btn-primary" onClick={this.start}>Boshlash</a>
                    <a href="#" className="btn btn-danger mx-4" onClick={this.stop}>To'x.</a>
                    <a href="#" className="btn btn-dark me-4" onClick={this.restrat}>Tashlash</a>
                    <a href="#" className="btn btn-success" onClick={this.jx}>Qo'shish</a>
                    
                </div>
                <ListGroup className="text-center lists mt-3 col-md-8 d-flex offset-md-2 align-items-center justify-content-center">
                    {
                        this.state.listsSeocnd.map((value, index) => {
                            return <ListGroupItem className="border-0 border-bottom px-5">{index + 1}: {value}</ListGroupItem>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
