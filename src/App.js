import React, { Component } from 'react';
import { PageHeader, Table, Jumbotron } from 'react-bootstrap';
import sampleImages from './sample-images.js'
import sampleURL from './sample-url.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "hubblesite.org/api/v3/images",
      image_apiURL: "http://hubblesite.org/api/v3/image",
      rawData: sampleImages,
      idImages: [],
      images: [],
      imageURL: sampleURL
    }
  }
  componentWillMount(){
    fetch(`${this.state.apiUrl}`).then((rawResponse)=>{
      // rawResponse.json() returns a promise that we pass along
      return rawResponse.json()
    }).then((parsedResponse) => {

      // when this promise resolves, we can work with our data
      let hubbleData = this.state.rawData
      let newId = []
      let newImage = []

      hubbleData.map((imageId)=>{
        newId.push({
          id: imageId.id,
        })
      })

      //  state is updated when promises are resolved
      this.setState({idImages: newId})
    // })
      // this.state.idImages.map((id)=>{
      //   newImage.push(
      //  apiCall = newId.map((id)=> {return apiURL + id.id })
      //   )
    })

  }
  render() {
    return (
      <div className="App">
        <div className="container" >
          <PageHeader>
            <img src="./images/asteroid.png" alt="Asteroid" />
            NASA Meteor
            <img src="./images/meteor-1.png" alt="Meteor" />
          </PageHeader>
          <Jumbotron>
          </Jumbotron>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Collection</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {this.state.idImages.map((image)=>{
                return(
                  <tr key={image.id}>
                    <td>{image.name}</td>
                    <td>{image.collection}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>

        </div>
      </div>
    )
  }
}

export default App;
