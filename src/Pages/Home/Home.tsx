import styles from '../../styles/Home/home.module.css' ;
import { useDispatch, useSelector } from 'react-redux';
import {Increment, Decrement} from '../../db/actions/index'

export const Home = () => {

    const counter = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
  return (


    <main className={styles.main}>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div>
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
        </div>

    </main>
  )
}

export default Home