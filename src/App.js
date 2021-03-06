import React, { Component } from 'react';
import { PageHeader, Table, Jumbotron } from 'react-bootstrap';
import sampleImages from './sample-images.js'
import sampleURL from './sample-url.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://hubblesite.org/api/v3/images",
      image_apiURL: "hubblesite.org/api/v3/image",
      rawData: sampleImages,
      idImages: [],
      images: [],
      imageURL: sampleURL
    }
  }
  componentWillMount(){
    let json = fetch(`${this.state.apiUrl}`)

    json.then((response) => {
      return response.json()
    })
    .then((json) => {
      let imagesArray = json
      let newIds = []

      imagesArray.forEach((imageId)=>{
        newIds.push({
          id: imageId.id,
          name: imageId.name,
          collection: imageId.collection
        })
      })

      this.setState({idImages: newIds})

    })

      // when this promise resolves, we can work with our data
      // let hubbleData = json
      // let newImage = []



  };


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
