import { useContext, useEffect, useState } from 'react';
import './Home.css'
import DataContext from '../context/dataContext';
const Home = () => {
    const context = useContext(DataContext)
    const {data, addName, dltClicker, fetchData} = context;
    const [input, setInput] = useState({name: ''})
    const handlerChange = (e)=>{
        setInput({...input, [e.target.name]:e.target.value})
    }
    const handlerClick = (e)=>{
        e.preventDefault();
        addName(input.name)
    document.getElementById('name').value = '';
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>Todo List</h1>
                </div>
                <div className="content">
                    <div className="inputHead">
                    <form onSubmit={handlerClick}>
                        <input type="text" placeholder="Enter your Name" id="name" name="name" onChange={handlerChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16" onClick={handlerClick}>
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        </form>
                    </div>
                    <div className='dataHead'>
                        {
                            data.map((e) => {
                                return (
                                    <>
                                    <div className="data">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={()=>{dltClicker(e._id)}}>
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                    </svg>
                                        <p>{e.name}</p>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )


};
export default Home