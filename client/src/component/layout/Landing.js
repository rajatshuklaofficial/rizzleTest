import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {k} from './data.js'


const mainDiv={
	height:'100vh',
	width:'100%'
}

class Landing extends Component{
	state={
		value:null,
		index:0
	}
  mouseMove=(event) =>{
  	const width=this.refs.mainDiv.clientWidth;
  	const height=this.refs.mainDiv.clientHeight;
  	const oX = (event.nativeEvent.offsetX/width)*100
  	const oY = (event.nativeEvent.offsetY/height)*100
  	if (oX>50) {
  		this.setState({value:'showProfile'})
  	}else if (oX<50) {
  		this.setState({value:null})
  	}
  	if (oY>50) {
  		if (this.state.index<k.length) {
  			this.setState({index:this.state.index+1})
  		}
  		else{
  			this.setState({index:k.length})
  		}
  	}else if (oY<50) {
  		if (this.state.index>0) {
  			this.setState({index:this.state.index-1})
  		}
  		else{
  			this.setState({index:0})
  		}
  	}
  }
	render(){
		if (this.state.index%2==0) {
			return(
				<video autoPlay loop style ={mainDiv} onMouseMove={this.mouseMove} ref='mainDiv' >
						<source src={k[this.state.index].video.originalUrl} type="video/mp4"/>
						</video>
						)
		}else if(this.state.value==='showProfile'){
			return(
					<div style ={mainDiv} onMouseMove={this.mouseMove} ref='mainDiv'>
						User:{k[this.state.index].channel.user.name}
					</div>
				)
			}
		else{
			return(
			<div  onMouseMove={this.mouseMove} ref='mainDiv'>
			<video autoPlay loop style ={mainDiv} >
				<source src={k[this.state.index].video.originalUrl} type="video/mp4"/>
				</video>
			  </div>
			  )
			}
		}
	}

export default Landing;