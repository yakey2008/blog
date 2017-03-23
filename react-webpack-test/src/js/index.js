//react 数据交互
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/index.css';

var AddBtn = React.createClass({
    addOne:function(event){
        console.log(11)
    },
    render:function(){
        return(
            <span className="add-one" onClick={this.addOne}>add-one</span>
        )
    }
})

var ItemList = React.createClass({
    render:function(){
        
        let createItem = (item)=>{
            return(
                <div className="inside-one">
                    <div className="item index">1</div>
                    <div className="item settheme">{item.theme}</div>
                    <div className="item name">
                        <NameOpt optname="{this.state.structure.prizeName}"/>
                    </div>
                    <div className="item">
                    <select name="" id="">
                        <option value="">2</option>
                    </select>
                    </div>
                    <div className="item delone"><b>X</b></div>
                </div>
            )
        }
        return <div className="outer-box">{this.props.items.map(createItem)}</div>
    }
})
var NameOpt = React.createClass({
    render:function(){
        let createOptname = (optitem)=>{
            return <option>{optitem}</option>
        }
        return <select name="" id="">{this.props.optname.map(createOptname)}</select>
    }
})

var ListContainer = React.createClass({
    getInitialState:function(){
        return{
            structure:{
                theme:'',
                prizeName:['ok','ok1'],
                prizeMethod:['once','more']
            },
            data:[
                {theme:'',
                name:'',
                method:''},
            ],
        }
    },
    render:function(){
        return(
            <div className="listContainer">
                <AddBtn/>
                <ItemList items={this.state.data}/>
            </div>
        )
    }
})

ReactDOM.render(
    <ListContainer/>,
    document.querySelector('#j-list')
)