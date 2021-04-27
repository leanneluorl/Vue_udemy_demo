<template>
  <div id="app">
    <v-main>
      <v-container>
        <v-card>
          <v-container>
            <h1>Covid-19 Tracking demo</h1>
              <v-row v-if="arrPositive.length">
                <v-col cols="12"
                v-for="chartData in renderData"
                :key="chartData.id">
                  <LineChart 
                    :label="chartData.label" 
                    :chartData="chartData.data"
                    :options="chartOptions"
                    :chartColorOptions="chartData.chartColorOptions"
                  />
                </v-col>>
              </v-row>
          </v-container>
        </v-card>>
      </v-container>>
    </v-main>
  </div>
</template>

<script>
import axios from 'axios'
import LineChart from './components/LineChart'
import dayjs from 'dayjs'

import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false



export default {
  name: 'App',

  components: {
    LineChart,
  },
  data(){
      return {
        arrPositive: [],
        arrHoptialized: [],
        arrInIcu: [],
        arrOnVentilators: [],
        arrRecovered: [],
        arrDeaths: [],
        chartOptions: {  
        responsive: true,
        maintainAspectRatio: false,
        },
      }
  },
  async created(){
    let {data} = await axios.get(
       'https://api.covidtracking.com/v1/us/daily.json'
    )
    console.log("data:",data) 
    let codata = data.slice(0,365)
    console.log("coData:",codata)
    codata.forEach( (item) => {
        const date = dayjs(`${item.date}`).format('YYYY/MM/DD')

        const {
          positive,
          hospitalizedCurrently,
          inIcuCurrently,
          positiveIncrease,
          onVentilatorCurrently,
          death,
        } = item

        this.arrPositive.push({date, total: positive})
        this.arrHoptialized.push({date, total: hospitalizedCurrently})
        this.arrDeaths.push({date, total: death})
        this.arrRecovered.push({date, total: positiveIncrease})
        this.arrOnVentilators.push({ date, total: onVentilatorCurrently })
        this.arrInIcu.push({ date, total: inIcuCurrently })
    })
    
  },
  computed:{
    renderData() {
      const{
        arrPositive,
        arrHoptialized,
        arrInIcu,
        arrOnVentilators,
        arrRecovered,
        arrDeaths,
      } = this

      const labels = [
        'positive',
        'Positive Increase',
        'Hospitalized',
        'InICU',
        'OnVentilators',
        'Death',
      ]

      const displayedDataArr = [
        arrPositive,
        arrRecovered,
        arrHoptialized,
        arrInIcu,
        arrOnVentilators,
        
        arrDeaths,
      ]

      const chartColorOptions = [
        {
          borderColor: 'rgb(255,192,203)',
          backgorundColor: 'rgba(255,192,203,0.2)',
        },
        {
          borderColor: "orange",
          backgorundColor: 'rgba(255,165,0,0.2)',
        },
        {
          borderColor: 'rgb(255,255,0)',
          backgorundColor: 'rgba(255,255,0,0.2)',
        },
        {
          borderColor: 'rgb(154,205,50)',
          backgorundColor: 'rgba(154,205,50,0.2)',
        },
        {
          borderColor:'rgb(0,191,255)',
          backgorundColor: 'rgba(0,191,255,0.2)',
        },
        {
          borderColor: 'rgb(138,43,226)',
          backgorundColor: 'rgba(138,43,226,0.2)',
        },
      ]

      return displayedDataArr.map((data, index) => ({
        label: labels[index],
        data,
        chartColorOptions: chartColorOptions[index],
      }))

    },

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
