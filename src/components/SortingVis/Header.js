import  React  from 'react';

const Header  = (props) =>{
    
    return (
        <div className="ui inverted menu">
            <div className="blue active item" onClick={()=>props.setArray()}>Reset Array</div>
            <div className="red item " onClick={()=>props.mergeSort()}>Merge Sort</div>
            <div className="red item" onClick={()=>props.SelectionSort()}>Selection Sort</div>
            <div className="red item" onClick={()=>props.BubbleSort()}>Bubble Sort</div>
            <div className="red item" onClick={()=>props.insertionSort()}>Insertion Sort</div>
            <div className="red item">Quick Sort</div>
            <div className="red item">Shell Sort</div>
            <div className="red item">Counting Sort</div>
            <a href={"https://github.com/satya-sudo"} className="red item"><i className="github icon"></i>Made by Satyam Shree</a>



        </div>
    );
}

export default Header;