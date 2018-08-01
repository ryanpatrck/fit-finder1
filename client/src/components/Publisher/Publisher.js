import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import './Publisher.css'
class Publisher extends React.Component {
  constructor(props) {
    super(props);
 
    this.subscriberProperties = {
      preferredFrameRate: 15,
      showControls: false,
      width: 600, 
      height: 520,
    };

    this.publisherProperties ={
      width: 200, 
      height: 220,
    }
 
    this.subscriberEventHandlers = {
      videoDisabled: event => {
        console.log('Subscriber video disabled!');
      },
      videoEnabled: event => {
        console.log('Subscriber video enabled!');
      }
    };
  }
  render() {
    console.log(process);
    return (
      <OTSession apiKey='46156272' sessionId="2_MX40NjE1NjI3Mn5-MTUzMjUyOTQ1MDMxMn4rNERmN1F4dkdseklKKys1cVAxejlqeDJ-UH4" token="T1==cGFydG5lcl9pZD00NjE1NjI3MiZzaWc9MThiZmJhZjEyOWFlYzMzZGQ0MGI1ZDIwMmMyNTRmYmM3ODQ3MzNmMzpzZXNzaW9uX2lkPTJfTVg0ME5qRTFOakkzTW41LU1UVXpNalV5T1RRMU1ETXhNbjRyTkVSbU4xRjRka2RzZWtsS0t5czFjVkF4ZWpscWVESi1VSDQmY3JlYXRlX3RpbWU9MTUzMjUyOTQ4MiZub25jZT0wLjk5Nzk1NTY1NzY5Nzk4Nzgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUzNTEyMTQ4MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==">
        
        <OTPublisher
        properties={this.publisherProperties}
        eventHandlers={this.publisherEventHandlers}
        />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
       
        

    );
  }
}

export default Publisher;