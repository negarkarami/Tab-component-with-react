import {useState} from "react";
import "./Tab.css"

const Tab = () => {
    const [state, setState] = useState(1);

    const action = (index) => {
        setState(index)
        console.log(index)
    }
    return(
        <div className="box">
            <div className="tabs">
                <div onClick={() => action(1)} className={`${state === 1 ? "tab active-tab" : "tab"}`} >tab1</div>
                <div onClick={() => action(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`} >tab2</div>
                <div onClick={() => action(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`} >tab3</div>
                <div onClick={() => action(4)} className={`${state === 4 ? "tab active-tab" : "tab"}`} >tab4</div>
                <div onClick={() => action(5)} className={`${state === 5 ? "tab active-tab" : "tab"}`} >tab5</div>
                <div onClick={() => action(6)} className={`${state === 6 ? "tab active-tab" : "tab"}`} >tab6</div>
                <div onClick={() => action(7)} className={`${state === 7 ? "tab active-tab" : "tab"}`} >tab7</div>
                <div onClick={() => action(8)} className={`${state === 8 ? "tab active-tab" : "tab"}`} >tab8</div>
                <div onClick={() => action(9)} className={`${state === 9 ? "tab active-tab" : "tab"}`} >tab9</div>
            </div>

            <div className="contents">
                <div className={`${state === 1 ? "content active-content" : "content"}`}>
                    <h2>content 1</h2>
                    <p>this is content 1</p>
                </div>
                <div className={`${state === 2 ? "content active-content" : "content"}`}>
                    <h2>content 2</h2>
                    <p>this is content 2</p>
                </div>
                <div className={`${state === 3 ? "content active-content" : "content"}`}>
                    <h2>content 3</h2>
                    <p>this is content 3</p>
                </div>
                <div className={`${state === 4 ? "content active-content" : "content"}`}>
                    <h2>content 4</h2>
                    <p>this is content 4</p>
                </div>
                <div className={`${state === 5 ? "content active-content" : "content"}`}>
                    <h2>content 5</h2>
                    <p>this is content 5</p>
                </div>
                <div className={`${state === 6 ? "content active-content" : "content"}`}>
                    <h2>content 6</h2>
                    <p>this is content 6</p>
                </div>
                <div className={`${state === 7 ? "content active-content" : "content"}`}>
                    <h2>content 7</h2>
                    <p>this is content 7</p>
                </div>
                <div className={`${state === 8 ? "content active-content" : "content"}`}>
                    <h2>content 8</h2>
                    <p>this is content 8</p>
                </div>
                <div className={`${state === 9 ? "content active-content" : "content"}`}>
                    <h2>content 9</h2>
                    <p>this is content 9</p>
                </div>
            </div>
        </div>
    )
}

export default Tab;