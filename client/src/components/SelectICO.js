import React from 'react';
import {StyleRoot} from 'radium';
import NavigationBar from './NavigationBar' 
import ICOItem from './ICOItem'
import '../styles/selectICO.css';



class SelectICOPage extends React.Component {

	getICO() {

		return [
			{
				name: "Toyota",
				startDate: '5/15/2018',
				endDate: '6/15/2018'
			}, 
			{
				name: "Honda",
				startDate: '7/15/2018',
				endDate: '8/15/2018'
			}
		]

	}


    render () {

    	const icoItems = this.getICO().map((ico) => {
    		
		return <ICOItem 
					name={ico.name}
					startDate={ico.startDate}
					endDate={ico.endDate}
				/>

    	}); 


        return (<div>
		    	<NavigationBar /> 
		    	<div className="icoListContainer">
		    		{icoItems}
		    	</div> 
		    	</div>
           );
    }
}

export default SelectICOPage