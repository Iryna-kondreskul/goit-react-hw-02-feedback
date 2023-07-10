import React, { Component } from 'react';
import {FeedbackOptions} from '../components/FeedbackOptions/FeedbackOptions'
// import {Section} from '../components/Section/Section'
import css from './App.module.css';
import {Statistic} from '../components/Statistics/Statistics'
import {Notification} from '../components/Notification/Notification'


class App extends Component {

  state = {
    tasks:{Good: 0,
      Neutral:0,
      Bad:0,
      Total:0,
      PositiveFeedback:0
    },
      emptyTasks:true,
  };

  heandlerClick = e => {
    const name = e.target.name;
    this.setState((prevState) =>{
      const updateTasks = {...prevState.tasks};
      updateTasks[name] +=1;
      updateTasks.Total = this.countTotalFeedback(updateTasks);
      updateTasks.PositiveFeedback = this.countPositiveFeedback(updateTasks, updateTasks.Total);
      prevState.emptyTasks = false;
      return {tasks:updateTasks};
    });
   console.log(name)

  }


  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state.tasks;
    return Good + Neutral + Bad;
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.tasks.Good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}`;
  };
  

    render() {
      return <>
      <div className={css.container}>
      <h1>Please leave feedback</h1>
      <FeedbackOptions heandlerClick={this.heandlerClick}/>
      {/* <Statistic Good={this.state.tasks.Good} Neutral={this.state.tasks.Neutral} Bad={this.state.tasks.Bad} Total={this.state.tasks.Total} PositiveFeedback={this.state.tasks.PositiveFeedback}/> */}
      {this.state.emptyTasks ? <Notification message="There is no feedback" />: <Statistic Good={this.state.tasks.Good} Neutral={this.state.tasks.Neutral} Bad={this.state.tasks.Bad} Total={this.state.tasks.Total} PositiveFeedback={this.state.tasks.PositiveFeedback}/>}
      </div>   
      </>
    }
};

 export default App;



