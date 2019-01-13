
import { Mongo } from 'meteor/mongo';

export default function defineCollections() {
  
  // define collections
  const Tasks = new Mongo.Collection('tasks');


  // make them global
  window.Tasks = Tasks;
  
}
