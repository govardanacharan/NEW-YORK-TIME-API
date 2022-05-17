import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,FlatList,ImageBackground,Image} from 'react-native';
import redux from 'redux';
import { StatusBar } from "expo-status-bar";



export default function Rende(){


    const[dataa,setData]=useState('datas');
    const[image,setimage]=useState('im');

    const[dataa2,setData2]=useState('datas');
    const[sum2,setsum2]=useState('im');


    const[dataa3,setData3]=useState('datas');
    const[sum3,setsum3]=useState('im');

    const[dataa4,setData4]=useState('datas');
    const[sum4,setsum4]=useState('im');
    const[dataa5,setData5]=useState('datas');
    const[sum5,setsum5]=useState('im');


      

    
        redux({
            method: 'get',
            url: 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=40&order=by-opening-date&api-key=vLWk7t8mfxj9CTiWj6TPHDP2T70IJ9Bp',
        }).then((response)=>{
            setData(response.data.results[0].display_title);
            setimage(response.data.results[0].summary_short);
            setData2(response.data.results[1].display_title);
            setsum2(response.data.results[1].summary_short);

            setData3(response.data.results[2].display_title);
            setsum3(response.data.results[2].summary_short);

            setData4(response.data.results[3].display_title);
            setsum4(response.data.results[3].summary_short);
            setData5(response.data.results[4].display_title);
            setsum5(response.data.results[4].summary_short);


        });
        
        
     
        
    
    return(
        <View>
      <View style={styles.head}>
          <Text style={styles.he}>MOVIE REVIEWS</Text>
         <Text style={styles.ho}> -BY NEWYORK TIMES API</Text>

         

     


       
       
          </View>

          <View>
          <Text style={styles.heading}>{dataa}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summa}>{image}</Text>
          </View>

          <View>
          <Text style={styles.heading}>{dataa2}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summa}>{sum2}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa3}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summa}>{sum3}</Text>  
          </View>

          <View>
          <Text style={styles.heading}>{dataa4}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summa}>{sum4}</Text> 
          </View>

          <View>
          <Text style={styles.heading}>{dataa5}</Text>
          <Text style={{fontSize:20}}>summary</Text>
          <Text style={styles.summa}>{sum5}</Text> 
          </View>

          </View>
    );
}

const styles = StyleSheet.create({

    head:{
     
       width:500,
       height:100,
       backgroundColor:'blue',
       paddingTop:50,
       paddingLeft:80,
      
    },

    he:{
     
        fontSize:25
    },
    ho:{
        fontSize:15
    },

    heading:{
        fontSize:30,
      
        
    },

    summa:{
        margin:10
    }

});
