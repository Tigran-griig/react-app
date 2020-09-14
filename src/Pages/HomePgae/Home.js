import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Box.css'
import Todo from "./Todo";

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div>
        <h1 data-aos={'fade-right'} >Lav Proekt</h1>

        <div className={'boxes'}>
            <div data-aos={'fade-left'} className={'box'}>S:Single responsibility principle</div>
                <Todo  />
            <div data-aos={'fade-right'} className={'box'}>O:Open / closed principles</div>
            {/*<O></O>*/}
            <div data-aos={'fade-left'} className={'box'}>L:Liskov Substitution principle</div>
            {/*<L></L>*/}
            <div data-aos={'fade-right'} className={'box'}>I:Interface segregation principle</div>
            {/*<I></I>*/}
            <div data-aos={'fade-left'} className={'box'}>D:Dependency inversion principle</div>
            {/*<D></D>*/}
        </div>
        </div>
    )
}
export default Home