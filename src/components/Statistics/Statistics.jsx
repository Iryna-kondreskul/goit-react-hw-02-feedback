import css from './Statistics.module.css'

export function Statistic ({Good,Neutral,Bad,Total,PositiveFeedback}){


    return(
    <div className={css.div}>
        <h1>Statistics</h1>
        <ul>
            <li className={css.text}>
             <p>Good: <span>{Good}</span> </p>
             </li>
            <li className={css.text}>
              <p>Neatral: <span>{Neutral}</span></p> 
            </li>
            <li className={css.text}>
               <p>Bad: <span>{Bad}</span></p>
            </li>
            <li className={css.text}>
               <p>Total: <span>{Total}</span></p></li>
            <li className={css.text}>
               <p>Positive feedback: <span>{PositiveFeedback} %</span></p></li>
        </ul>
    </div>)
        }

      