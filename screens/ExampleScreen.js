import React from 'react'
import Example from '../components/Example'
import API from '../api/'

export default function ExampleScreen(){
    async function test(){
        const datas = await API.example()
        console.log('Datas : ', datas)
      }
      test()

    return <Example />
}