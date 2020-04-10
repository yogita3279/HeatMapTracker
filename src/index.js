

import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './App';
import './styles/Style.css'

const data = [
  { lat: 47.6062095,lng: -122.3320708,weight: 0.5 },
  { lat: 47.619106,lng: -122.1913479,weight: 5 },
  { lat: 47.332842, lng: -122.608,weight: 7 },
    { lat: 47.330228, lng: -122.606,weight: 2 },
  { lat: 47.330169, lng: -122.606,weight:1},
  { lat: 47.330066, lng: -122.6066700000001,weight: 0.5 },


];

render(
<div class="map"><Map center={{ lat: 47.333, lng: -122.606 }} zoom={14} positions={data}/></div>, document.getElementById('root'));

