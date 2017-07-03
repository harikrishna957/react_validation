import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {};
interface IState {
	warning: string;
};

class Component extends React.Component<IProps, IState> {
	constructor(){
		super()
		this.Validation = this.Validation.bind(this);
		this.state = {warning:""}
	}
	Validation(e:any){
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
			this.setState({
				warning:"Success"
			})
		}
		else {
			this.setState({
				warning:"Error"
			})
		}
	}
	render(){
		return <div>
			<div style={{color:(this.state.warning=="Success")?"green":"red"}}>{this.state.warning}</div>
			<input type="text" onChange={this.Validation}/>
	</div>
	}
}

ReactDOM.render (<Component/>, document.getElementById("app"))