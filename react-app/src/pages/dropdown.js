import React, { useState } from "react"
import '../styles/dropdown.css'
import { useDispatch } from "react-redux";

export default function Dropdown() {
    const [isOpenCost, setIsOpenCost] = useState(false);
    const [isOpenCount, setisOpenCount] = useState(false);

    const dispatch = useDispatch();

    return(
        <div className="dropdown">
            <div className="dropdown-left">
                <button className = 'button-dropdown-one' onClick={() => !isOpenCost ? setIsOpenCost(true) : setIsOpenCost(false)}>По цене:</button>
                <div className="div-list" style={
                    {
                        border: isOpenCost ? '1px solid #000' : 'none'
                    }
                }> {
                    isOpenCost && <ul className="list">
                        <li className="li">По возрастанию</li>
                        <li className="li">По убыванию</li>
                    </ul> 
                    }
                </div>
            </div>
            <div className="dropdown-right">
                <button className = 'button-dropdown-one' onClick={() => !isOpenCount ? setisOpenCount(true) : setisOpenCount(false)}>По количеству:</button>
                <div className="div-list" style={
                    {
                        border: isOpenCount ? '1px solid #000' : 'none'
                    }
                }> {
                    isOpenCount && <ul className="list">
                        <li>По возрастанию</li>
                        <li>По убыванию</li>
                    </ul> 
                    }
                </div>
            </div>
        </div>
    );
}