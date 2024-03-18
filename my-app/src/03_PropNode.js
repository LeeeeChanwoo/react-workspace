import { Component } from "react";

class PropNode extends Component {
    render(){
        return(
            <div style={{padding:"0px"}}>
                {this.props.children}
                //부모 요소로부터 전달받은 node를 출력
            </div>
        )
    }
}
export default PropNode;