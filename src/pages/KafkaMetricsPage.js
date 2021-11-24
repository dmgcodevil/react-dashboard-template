import React from 'react';
import { Progress, Button, Grid, Icon, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

class KafkaMetrics extends React.Component {
  render() {
    return (
      <div>
        <h5>partition={this.props.partition}; start={this.props.start}; end={this.props.end}; current={this.props.current}</h5>
        <Progress percent={this.props.utilization} indicating />
      </div>
    )
  }
}

KafkaMetrics.propTypes = {
  partition: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  utilization: PropTypes.number.isRequired,
};

class KafkaMetricsGroup extends React.Component {


  refresh = () => {
    console.log(`refresh: ${this.props.title}`)
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Grid celled>

          {
            this.props.data.map((element, index) => {
              return <Grid.Row>
                <Grid.Column >
                  <KafkaMetrics 
                  partition={element.partition} 
                  start={element.start} 
                  end={element.end} 
                  current={element.current} 
                  utilization={element.utilization} ></KafkaMetrics>
                </Grid.Column>
              </Grid.Row>
            })
          }

        </Grid>

        <Button onClick={this.refresh}><Icon name="refresh" /></Button>
      </div>
    )
  }
}

KafkaMetricsGroup.propTypes = {
  title: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    partition: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number,
    current: PropTypes.number,
    utilization: PropTypes.number,
  })).isRequired,
};


var testData1 = [{
  partition: 0,
  start: 0,
  end: 10,
  current: 5,
  utilization: 50
}]

var testData2 = [{
  partition: 1,
  start: 2,
  end: 10,
  current: 5,
  utilization: 60
}]

class KafkaMetricsPage extends React.Component {
  render() {
    return (
      <Grid celled>
        <Grid.Row>

          <Grid.Column >
            <KafkaMetricsGroup title="title1" data={testData1}></KafkaMetricsGroup>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <KafkaMetricsGroup title="title2" data={testData2}></KafkaMetricsGroup>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default KafkaMetricsPage;