import Axios from 'axios'
import React, {useState} from 'react'


function Importcsv() {

    const fs = require('fs')
    var ObjectId = require('mongodb').ObjectId

    const [Type, setType] = useState("Default")

    window.onload = function(){
      var p = document.getElementById('placeUpload')
      p.addEventListener('change', function(event){
        setType('Place')
      })

      var r = document.getElementById('recUpload')
      r.addEventListener('change', function(event){
        setType('Recommend')
      })

      var c = document.getElementById('courseUpload')
      c.addEventListener('change', function(event){
        setType('Course')
      })

      var a = document.getElementById('arroundUpload')
      a.addEventListener('change', function(event){
        setType('Arround')
      })
    }
    
    const readFile = (event) => {
      event.preventDefault()
      let file  = event.target.files[0]
      //console.log(file)
      var reader = new FileReader()
      reader.readAsText(file)
      reader.onload = function(){
        let reading = reader.result
        var fileLines = reading.split("\n")
        console.log(fileLines.length)
        readLines(fileLines)
       // console.log('fileSelected')
      }
    }


    const readLines = (fileLines) => {
      console.log('readLines')
      for (let i =0; i < fileLines.length-1; i++){
        var dataPre = fileLines[i].replace(/\r/gm, "")
        var data = dataPre.split(",")
        console.log(data)
        console.log(Type)
        getData(data)
      }
    }

    const getData = (data) => {
      if (Type == 'Place'){
        let body = {
          name: data[0],
          address: data[1],
          parking: data[2],
          toilet: data[3],
          holiday: data[4],
          fee: data[5],
          facility: data[6],
          equipment: data[7],
          curator: data[8],
          description: data[9],
          geometry: {
              type: 'Point',
              coordinates: [data[10], data[11]]
          }
        }
        uploadLines(body)
      } else if (Type=='Recommend') {
        let body = {
          placeId: ObjectId(data[0]),
          visual: data[1],
          intellectual: data[2],
          wheelchairM: data[3],
          wheelchairA: data[4],
          physicalW: data[5],
          auditory: data[6],
          senior: data[7],
          infant: data[8]
        }
        uploadRec(body)
      } else if (Type=='Course') {
        let bool = (data[2] == 'TRUE')
        let body = {
          placeId: ObjectId(data[0]),
          course: data[1],
          recommend: bool
        }
        uploadCourse(body)
      } else if (Type=='Arround') {
        let wheel = (data[6]=='TRUE')
        let toilet = (data[7]=='TRUE')
        let body = {
          placeId: ObjectId(data[0]),
          name: data[1],
          category: data[2],
          distance: data[3],
          address: data[4],
          phone: data[5],
          wheel: wheel,
          toilet: toilet,
          geometry:{
            type: 'Point',
            coordinates: [data[8], data[9]]
          }
        }
        uploadArround(body)
      }
    }

    const uploadLines = (body) => {
      Axios.post('/api/place/addPlace', body)
          .then(response => {
              if (response.data.success){
                console.log('upload Success!!!!')
              }else{
                  alert("Fail!!!!!!!!!!!")
              }
          })
    }

    const uploadRec = (body) => {
      Axios.post('/api/recommend/addRecommend', body)
        .then(response => {
          if (response.data.success){
            console.log('upload Success!!!!')
          }else{
            alert("Fail!!!!!!!!!!!")
          }
        })
    }

    const uploadCourse = (body) => {
      Axios.post('/api/course/addCourse', body)
        .then(response => {
          if (response.data.success){
            console.log('upload Success!!!!')
          }else{
            alert("Fail!!!!!!!!!!!")
          }
        })
    }

    const uploadArround = (body) => {
      Axios.post('/api/arround/addArround', body)
        .then(response => {
          if (response.data.success){
            console.log('upload Success!!!!')
          }else{
            alert("Fail!!!!!!!!!!!")
          }
        })
    }
    
  return (
    <div>
      <form>
        <div>add Place</div>
        <input type='file' id='placeUpload' onChange={readFile}/>
      </form>
      <form>
        <div>add Recommend</div>
        <input type='file' id='recUpload' onChange={readFile}/>
      </form>
      <form>
        <div>add Course</div>
        <input type='file' id='courseUpload' onChange={readFile}/>
      </form>
      <form>
        <div>add Arround</div>
        <input type='file' id='arroundUpload' onChange={readFile}/>
      </form>
    </div>
  )
}

export default Importcsv