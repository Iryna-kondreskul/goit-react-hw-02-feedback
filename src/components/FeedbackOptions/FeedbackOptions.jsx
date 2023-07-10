import css from './FeedbackOptions.module.css'


export function FeedbackOptions({heandlerClick}) {
  
  return <div>
    <button 
    className={css.button} 
    name="Good" 
    type="button" 
    onClick={heandlerClick}
    >
      Good
    </button>
    <button
     className={css.button} 
     name="Neutral" 
     type="button" 
     onClick={heandlerClick}
     >
      Neutral
    </button>
    <button
     className={css.button}
     name="Bad" 
     type="button" 
     onClick={heandlerClick}
     >
      Bad
    </button>

  </div>

  }
  
