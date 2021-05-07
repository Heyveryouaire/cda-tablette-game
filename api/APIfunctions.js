import React from 'react'
import { View, Text } from 'react-native'

export function APIfunctions (url){
    return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then((data)=> {
                console.log('Les données renvoyées par l\'API', data);
                resolve(data);
            })
            .catch( error => {
                console.log("Erreur de requete ", error);
                reject(new Error('API non disponible'))
            })
    })


}