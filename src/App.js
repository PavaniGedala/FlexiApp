import logo from './logo.svg';
import './App.css';
import Flexi from './Flexi';
const flexiConfig = {
  items: [
    {
      "name": "personname",
      "label": "Person's Name",
      "type": "TextField",
      "value":""
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "value":"",
      "values": [
        "Maharashtra0",
        "Kerala0",
        "Tamil Nadu0"
      ]
    }
  ],
  children: [
    {
      items: [
        {
          "name": "personname",
          "label": "Person's Name",
          "type": "TextField"
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra1",
            "Kerala1",
            "Tamil Nadu1"
          ]
        }
      ],
      children: [{
      items: [
        {
          "name": "personname",
          "label": "Person's Name",
          "type": "TextField"
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra2",
            "Kerala2",
            "Tamil Nadu2"
          ]
        }
      ],
      children: [{
        items: [
          {
            "name": "personname",
            "label": "Person's Name",
            "type": "TextField"
          },
          {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
              "Maharashtra3",
              "Kerala3",
              "Tamil Nadu3"
            ]
          }
        ],
        children: []
      }]
    }]
    },
    {
      items: [
        {
          "name": "personname",
          "label": "Person's Name",
          "type": "TextField"
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra4",
            "Kerala4",
            "Tamil Nadu4"
          ]
        }
      ],
      children: [ {
        items: [
          {
            "name": "personname",
            "label": "Person's Name",
            "type": "TextField"
          },
          {
            "name": "states",
            "label": "Person's state",
            "type": "DropDown",
            "values": [
              "Maharashtra6",
              "Kerala6",
              "Tamil Nadu6"
            ]
          }
        ]
      }]
    }
  ]
};


function App() {
const onFlexiSubmit = (event) => {
  event.preventDefault();
  console.log(event.target);
}
  return (
    <div className="App">
      <Flexi configData={flexiConfig} onSubmit={onFlexiSubmit}/>
    </div>
  );
}

export default App;
